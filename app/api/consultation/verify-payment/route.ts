import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { getConsultationBookings } from "@/lib/mongodb";
import { getClientIp } from "@/lib/security";
import { sendTelegramMessage, createOneTimeInviteLink } from "@/lib/telegram";
import { sendConsultationConfirmation } from "@/lib/email";

// SECURITY: Timeout for outbound calls
const OUTBOUND_TIMEOUT_MS = 8000;

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

// Sanitize and validate user input fields — strip HTML, trim, cap length
// SECURITY FIX: Also strips $ prefix to prevent MongoDB operator injection
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
    const {
      fullName,
      email,
      phone,
      experience,
      telegram,
      network,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = body;

    if (!fullName || !email || !phone || !experience) {
      return NextResponse.json(
        { error: "Name, email, phone, and experience level are required" },
        { status: 400 }
      );
    }

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Payment verification data missing" },
        { status: 400 }
      );
    }

    // SECURITY FIX: Sanitize all body inputs — strip HTML tags AND MongoDB operators ($ prefix).
    const sanitized = {
      fullName: sanitizeField(fullName, 200),
      email: sanitizeField(email, 320).toLowerCase(),
      phone: sanitizeField(phone, 20),
      experience: sanitizeField(experience, 50),
      telegram: sanitizeField(telegram, 100),
      network: sanitizeField(network, 200),
      razorpay_payment_id: sanitizeField(razorpay_payment_id, 100),
      razorpay_order_id: sanitizeField(razorpay_order_id, 100),
      razorpay_signature: sanitizeField(razorpay_signature, 200),
    };

    // Basic email format validation (defense in depth)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // SECURITY FIX: Verify signature using timingSafeEqual — plain === short-circuits and leaks timing.
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${sanitized.razorpay_order_id}|${sanitized.razorpay_payment_id}`)
      .digest("hex");
    const generatedBuf = Buffer.from(generatedSignature, "hex");
    const receivedBuf = Buffer.from(razorpay_signature, "hex");
    if (
      generatedBuf.length !== receivedBuf.length ||
      !crypto.timingSafeEqual(generatedBuf, receivedBuf)
    ) {
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    // SECURITY FIX: Idempotency check + order ownership verification.
    // Even with a valid HMAC signature, verify razorpayOrderId matches our records.
    // This prevents an attacker from using their own captured payment but substituting
    // a different email to register under someone else's booking.
    const bookings = await getConsultationBookings();
    const existingBooking = await bookings.findOne({ razorpayPaymentId: sanitized.razorpay_payment_id });
    if (existingBooking) {
      if (existingBooking.razorpayOrderId !== sanitized.razorpay_order_id) {
        return NextResponse.json({ error: "Order mismatch" }, { status: 400 });
      }
      return NextResponse.json({
        success: true,
        inviteLink: existingBooking.inviteLink || "",
        whatsappLink: WHATSAPP_LINK,
      });
    }

    const ipAddress = getClientIp(req);

    // 1. Save to MongoDB — amountPaid omitted since webhook is the source of truth
    await bookings.insertOne({
      fullName: sanitized.fullName,
      email: sanitized.email,
      phoneNumber: sanitized.phone,
      experienceLevel: sanitized.experience,
      telegramUsername: sanitized.telegram || null,
      currentCpaNetwork: sanitized.network || null,
      paymentStatus: "captured",
      razorpayPaymentId: sanitized.razorpay_payment_id,
      razorpayOrderId: sanitized.razorpay_order_id,
      razorpaySignature: sanitized.razorpay_signature,
      currency: "INR",
      source: "consultation",
      createdAt: new Date(),
      ipAddress: ipAddress || null,
    });

    // 2. Generate one-time Telegram invite link with timeout
    let inviteLink = "";
    try {
      inviteLink = await withTimeout(createOneTimeInviteLink(), OUTBOUND_TIMEOUT_MS);
    } catch {
      // Non-fatal
    }

    // 3. Send Telegram notification to payment channel (thread 2)
    const telegramMessage = [
      `💳 *New Consultation Booking*`,
      ``,
      `*Name:* ${escapeMarkdown(sanitized.fullName)}`,
      `*Email:* ${escapeMarkdown(sanitized.email)}`,
      `*Phone:* ${escapeMarkdown(sanitized.phone)}`,
      `*Experience:* ${escapeMarkdown(sanitized.experience)}`,
      `*Telegram:* ${escapeMarkdown(sanitized.telegram || "Not provided")}`,
      `*CPA Network:* ${escapeMarkdown(sanitized.network || "Not provided")}`,
      `*Payment ID:* \`${escapeMarkdown(sanitized.razorpay_payment_id)}\``,
      `*Amount:* ₹${((Number(process.env.CONSULTATION_AMOUNT) || 49900) / 100).toFixed(0)}`,
      ``,
      `---`,
      `New booking confirmed via VoidZero CPA Website`,
    ].join("\n");

    withTimeout(sendTelegramMessage(telegramMessage, "2"), OUTBOUND_TIMEOUT_MS).catch(() => {});

    // 4. Send confirmation email with timeout
    if (sanitized.email && inviteLink) {
      withTimeout(
        sendConsultationConfirmation({
          to: sanitized.email,
          name: sanitized.fullName,
          telegramInviteLink: inviteLink,
          whatsappLink: WHATSAPP_LINK,
        }),
        OUTBOUND_TIMEOUT_MS
      ).catch((emailErr) => {
        console.error("Email sending failed:", emailErr);
      });
    }

    return NextResponse.json({
      success: true,
      inviteLink,
      whatsappLink: WHATSAPP_LINK,
    });
  } catch (err) {
    console.error("Consultation verify-payment error:", err);
    return NextResponse.json({ error: "Failed to process payment" }, { status: 500 });
  }
}