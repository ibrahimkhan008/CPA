import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Razorpay from "razorpay";
import { getConsultationBookings } from "@/lib/mongodb";
import { getClientIp } from "@/lib/security";
import { sendTelegramMessage, createOneTimeInviteLink } from "@/lib/telegram";
import { sendConsultationConfirmation } from "@/lib/email";

// SECURITY: Timeout for all outbound calls (Telegram, email) to prevent webhook hangs
const OUTBOUND_TIMEOUT_MS = 8000;

// Timeout wrapper — rejects after ms, preventing webhook from hanging indefinitely
async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Webhook outbound call timed out")), ms);
    promise.finally(() => clearTimeout(timer)).then(resolve, reject);
  });
}

// Escape special Markdown characters in Telegram messages to prevent injection
function escapeMarkdown(text: string): string {
  return String(text)
    .replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, (c) => `\\${c}`)
    .slice(0, 1000);
}

// Sanitize and validate user input fields
function sanitizeField(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLen);
}

const WHATSAPP_LINK = process.env.WHATSAPP_LINK || "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1";

function getRazorpay() {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay credentials are not configured");
  }
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

const WEBHOOK_SECRET = process.env.RAZORPAY_WEBHOOK_SECRET!;

function verifyWebhookSignature(body: string, signature: string): boolean {
  const expected = crypto
    .createHmac("sha256", WEBHOOK_SECRET)
    .update(body)
    .digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(expected, "hex"),
    Buffer.from(signature, "hex")
  );
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature") ?? "";

    if (!verifyWebhookSignature(rawBody, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;

    if (event === "payment.captured") {
      const payment = payload.payload?.payment?.entity;

      if (!payment) {
        return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
      }

      const bookings = await getConsultationBookings();

      // Idempotency: skip if already processed
      const already = await bookings.findOne({ razorpayPaymentId: payment.id });
      if (already) {
        return NextResponse.json({ success: true, status: "already_processed" });
      }

      // Fetch the order to get customer notes (payment.captured has no order entity)
      // SECURITY FIX: Wrap order fetch in try/catch — if Razorpay returns an error here,
      // we must NOT proceed with booking creation. Allowing empty defaults from `order.notes ?? {}`
      // when the order fetch fails would create bookings with meaningless data ("Customer", no email).
      // Fail loudly so the idempotency key (razorpayPaymentId) survives the retry — webhook will
      // re-fire and find the idempotency record rather than creating a ghost booking.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let order: any = null;
      try {
        order = await withTimeout(getRazorpay().orders.fetch(payment.order_id), OUTBOUND_TIMEOUT_MS);
      } catch (orderErr) {
        console.error("Failed to fetch Razorpay order notes:", orderErr);
        return NextResponse.json(
          { error: "Failed to fetch order details" },
          { status: 500 }
        );
      }
      const rawNotes: Record<string, unknown> = order.notes ?? {};


      // SECURITY FIX: Re-validate experience server-side even though create-order also validates.
      // Attacker could submit a different (malicious) experience value directly to the webhook
      // (mitm on their own app → RazorPay → webhook path). validate allowlist here too.
      const VALID_EXPERIENCE = new Set(["beginner", "intermediate", "advanced"]);
      const rawExperience = sanitizeField(rawNotes.experience, 50);
      const experience = VALID_EXPERIENCE.has(rawExperience) ? rawExperience : "intermediate";

      const notes = {
        fullName: sanitizeField(rawNotes.fullName, 200),
        email: sanitizeField(rawNotes.email, 320),
        phone: sanitizeField(rawNotes.phone, 20),
        experience, // validated above — no re-read from rawNotes needed
        telegram: sanitizeField(rawNotes.telegram, 100),
        network: sanitizeField(rawNotes.network, 200),
      };

      // Generate one-time Telegram invite link with timeout
      let inviteLink = "";
      try {
        inviteLink = await withTimeout(createOneTimeInviteLink(), OUTBOUND_TIMEOUT_MS);
      } catch {
        // Non-fatal — invite link may be sent separately
      }

      // SECURITY FIX: Use centralized getClientIp that validates Vercel proxy IPs.
      const ipAddress = getClientIp(req);

      // Insert directly — no pending state
      await bookings.insertOne({
        fullName: notes.fullName || "Customer",
        email: notes.email || "",
        phoneNumber: notes.phone || "",
        experienceLevel: notes.experience || "",
        telegramUsername: notes.telegram || null,
        currentCpaNetwork: notes.network || null,
        paymentStatus: "captured",
        razorpayPaymentId: payment.id,
        razorpayOrderId: payment.order_id,
        razorpaySignature: "",
        amountPaid: payment.amount,
        currency: payment.currency,
        source: "consultation",
        createdAt: new Date(),
        ipAddress: ipAddress || null,
        inviteLink,
      });

      const fullName = notes.fullName || "Customer";
      const email = notes.email || "";

      // Send Telegram notification to payment thread (thread ID 2)
      const telegramMessage = [
        `💳 *New Consultation Booking*`,
        ``,
        `*Name:* ${escapeMarkdown(fullName)}`,
        `*Email:* ${escapeMarkdown(email)}`,
        `*Phone:* ${escapeMarkdown(notes.phone || "—")}`,
        `*Experience:* ${escapeMarkdown(notes.experience || "—")}`,
        `*Telegram:* ${escapeMarkdown(notes.telegram || "Not provided")}`,
        `*CPA Network:* ${escapeMarkdown(notes.network || "Not provided")}`,
        `*Payment ID:* \`${escapeMarkdown(payment.id)}\``,
        `*Amount:* ₹${(payment.amount / 100).toFixed(0)}`,
        ``,
        `---`,
        `Booking confirmed — VoidZero CPA`,
      ].join("\n");

      withTimeout(sendTelegramMessage(telegramMessage, "2"), OUTBOUND_TIMEOUT_MS).catch(() => {});

      // Send consultation details to consultation thread (thread ID 3)
      const consultationMessage = [
        `✅ *Consultation Booking Confirmed*`,
        ``,
        `*Client:* ${escapeMarkdown(fullName)}`,
        `*Email:* ${escapeMarkdown(email)}`,
        `*Phone:* ${escapeMarkdown(notes.phone || "—")}`,
        `*Experience Level:* ${escapeMarkdown(notes.experience || "—")}`,
        `*Telegram:* ${escapeMarkdown(notes.telegram || "Not provided")}`,
        `*CPA Network:* ${escapeMarkdown(notes.network || "Not provided")}`,
        ``,
        `━━━━━━━━━━━━━━━━━━━━`,
        `*Payment Details*`,
        `━━━━━━━━━━━━━━━━━━━━`,
        `*Order ID:* \`${escapeMarkdown(payment.order_id)}\``,
        `*Payment ID:* \`${escapeMarkdown(payment.id)}\``,
        `*Amount Paid:* ₹${(payment.amount / 100).toFixed(0)}`,
        `*Status:* ✅ Captured`,
        ``,
        `━━━━━━━━━━━━━━━━━━━━`,
        `*Next Steps*`,
        `━━━━━━━━━━━━━━━━━━━━`,
        `• Reach out via Telegram to schedule the session`,
        `• Share curriculum and onboarding materials`,
        `• Add client to WhatsApp group`,
        ``,
        `---`,
        `Booking confirmed — VoidZero CPA`,
      ].join("\n");

      withTimeout(sendTelegramMessage(consultationMessage, "3"), OUTBOUND_TIMEOUT_MS).catch(() => {});

      if (email && inviteLink) {
        withTimeout(
          sendConsultationConfirmation({
            to: email,
            name: fullName,
            telegramInviteLink: inviteLink,
            whatsappLink: WHATSAPP_LINK,
          }),
          OUTBOUND_TIMEOUT_MS
        ).catch(() => {}); // Non-fatal
      }

      return NextResponse.json({ success: true, status: "processed" });
    }

    if (event === "payment.failed") {
      return NextResponse.json({ success: true, status: "logged" });
    }

    return NextResponse.json({ success: true, status: "event_acknowledged" });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}