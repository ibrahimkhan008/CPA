import { NextRequest, NextResponse } from "next/server";
import { getWebinarRegistrations } from "@/lib/mongodb";
import { getClientIp } from "@/lib/security";
import { sendTelegramMessage } from "@/lib/telegram";

// SECURITY: Timeout for outbound calls
const OUTBOUND_TIMEOUT_MS = 8000;

// SECURITY FIX: Rate limiting — track submissions per IP and email in-memory.
// NOTE: In-process map resets on cold start (Vercel serverless). For production at scale,
// replace with Upstash Redis or Vercel KV for distributed rate limiting.
// Current implementation is acceptable for MVP traffic levels.
const ipRateLimit = new Map<string, { count: number; resetAt: number }>();
const emailRateLimit = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX_IP = 5; // max 5 registrations per IP per hour
const RATE_LIMIT_MAX_EMAIL = 3; // max 3 registrations per email per hour

function checkRateLimit(
  map: Map<string, { count: number; resetAt: number }>,
  key: string,
  max: number
): { allowed: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const entry = map.get(key);

  if (!entry || now > entry.resetAt) {
    map.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= max) {
    return { allowed: false, retryAfterMs: entry.resetAt - now };
  }

  entry.count++;
  return { allowed: true };
}

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Outbound call timed out")), ms);
    promise.finally(() => clearTimeout(timer)).then(resolve, reject);
  });
}

// Escape special Markdown characters in Telegram messages to prevent injection
function escapeMarkdown(text: string): string {
  return String(text)
    .replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, (c) => `\\${c}`)
    .slice(0, 1000);
}

// SECURITY FIX: strips HTML tags AND $ prefixes to prevent NoSQL operator injection.
function sanitizeField(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return String(value)
    .replace(/<[^>]*>/g, "")
    .replace(/\$/g, " ")
    .trim()
    .slice(0, maxLen);
}

const WHATSAPP_LINK = process.env.WHATSAPP_LINK || "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, telegram } = body;

    // SECURITY FIX: Sanitize all inputs — strips HTML tags AND MongoDB $ operators.
    const sanitized = {
      name: sanitizeField(name, 200),
      email: sanitizeField(email, 320).toLowerCase(),
      phone: sanitizeField(phone, 20),
      interest: sanitizeField(interest, 200),
      telegram: sanitizeField(telegram, 100),
    };

    if (!sanitized.name || !sanitized.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // SECURITY FIX: Rate limit by IP and email to prevent enumeration and spam.
    const clientIp = getClientIp(req);
    if (clientIp) {
      const ipCheck = checkRateLimit(ipRateLimit, clientIp, RATE_LIMIT_MAX_IP);
      if (!ipCheck.allowed) {
        return NextResponse.json(
          { error: "Too many requests. Please try again later." },
          {
            status: 429,
            headers: { "Retry-After": String(Math.ceil((ipCheck.retryAfterMs ?? 0) / 1000)) },
          }
        );
      }
    }

    // SECURITY FIX: Rate limit by email to prevent duplicate registration spam.
    // Also mitigates email enumeration — we don't reveal whether email exists.
    const emailCheck = checkRateLimit(emailRateLimit, sanitized.email, RATE_LIMIT_MAX_EMAIL);
    if (!emailCheck.allowed) {
      return NextResponse.json(
        { error: "Too many requests from this email. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(Math.ceil((emailCheck.retryAfterMs ?? 0) / 1000)) },
        }
      );
    }

    // Check for existing registration — don't leak whether email exists.
    // Return success either way to prevent enumeration.
    const registrations = await getWebinarRegistrations();
    const existing = await registrations.findOne({ email: sanitized.email });

    if (existing) {
      return NextResponse.json({ success: true });
    }

    // Insert new registration
    await registrations.insertOne({
      fullName: sanitized.name,
      email: sanitized.email,
      whatsappNumber: sanitized.phone || null,
      telegramUsername: sanitized.telegram || null,
      interest: sanitized.interest || null,
      source: "webinar",
      createdAt: new Date(),
      ipAddress: clientIp || null,
    });

    // Send to Telegram with timeout — non-blocking
    const message = [
      `🎙 *New Webinar Registration*`,
      ``,
      `*Name:* ${escapeMarkdown(sanitized.name)}`,
      `*Email:* ${escapeMarkdown(sanitized.email)}`,
      `*Phone:* ${escapeMarkdown(sanitized.phone || "Not provided")}`,
      `*Telegram:* ${escapeMarkdown(sanitized.telegram || "Not provided")}`,
      `*Interest:* ${escapeMarkdown(sanitized.interest || "Not specified")}`,
      ``,
      `---`,
      `Sent via VoidZero CPA Website`,
    ].join("\n");

    withTimeout(sendTelegramMessage(message, "4"), OUTBOUND_TIMEOUT_MS).catch((err) => {
      console.error("Telegram API error:", err);
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
