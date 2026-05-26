import { NextRequest, NextResponse } from "next/server";
import { getCancelledConsultations, getConsultationBookings } from "@/lib/mongodb";
import { getClientIp } from "@/lib/security";
import { sendTelegramMessage } from "@/lib/telegram";

const OUTBOUND_TIMEOUT_MS = 8000;

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Outbound call timed out")), ms);
    promise.finally(() => clearTimeout(timer)).then(resolve, reject);
  });
}

function escapeMarkdown(text: string): string {
  return String(text)
    .replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, (c) => `\\${c}`)
    .slice(0, 1000);
}

function sanitizeField(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpayOrderId, email } = body;

    if (!razorpayOrderId) {
      return NextResponse.json({ error: "Order ID required" }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const sanitizedEmail = sanitizeField(email, 320).toLowerCase();

    // SECURITY FIX — ORDER CANCELLATION IDOR:
    // Without an auth check here, ANYONE who knows an order ID can call /api/consultation/cancel
    // and mark that order as cancelled, potentially locking the user out of their own booking.
    //
    // Fix: verify the order exists in consultation_bookings and the email matches.
    // This ties the cancel action to a real purchase intent — only the order owner can cancel.
    const bookings = await getConsultationBookings();
    const existingBooking = await bookings.findOne({
      razorpayOrderId,
      email: sanitizedEmail,
    });

    if (!existingBooking) {
      // Don't reveal whether the order exists — return generic success
      return NextResponse.json({ success: true });
    }

    // Idempotency: skip if already cancelled
    const cancelled = await getCancelledConsultations();
    const wasCancelled = await cancelled.findOne({ razorpayOrderId });
    if (wasCancelled) {
      // Return generic success — don't leak already-cancelled state
      return NextResponse.json({ success: true });
    }

    // SECURITY FIX: Use centralized getClientIp that validates Vercel proxy IPs.
    const ipAddress = getClientIp(req);

    // Retrieve full details from the existing booking — don't trust everything from body
    const fullName = sanitizeField(body.fullName ?? existingBooking.fullName, 200);
    const phone = sanitizeField(body.phone ?? existingBooking.phoneNumber, 20);
    const experience = sanitizeField(body.experience ?? existingBooking.experienceLevel, 50);
    const telegram = sanitizeField(body.telegram ?? existingBooking.telegramUsername, 100);
    const network = sanitizeField(body.network ?? existingBooking.currentCpaNetwork, 200);

    await cancelled.insertOne({
      fullName,
      email: sanitizedEmail,
      phoneNumber: phone,
      experienceLevel: experience,
      telegramUsername: telegram || null,
      currentCpaNetwork: network || null,
      paymentStatus: "cancelled",
      razorpayPaymentId: null,
      razorpayOrderId,
      razorpaySignature: "",
      amountPaid: null,
      currency: "INR",
      source: "consultation",
      createdAt: new Date(),
      cancelledAt: new Date(),
      ipAddress: ipAddress || null,
      inviteLink: null,
    });

    const telegramMessage = [
      `⚠️ *Consultation — Payment Cancelled*`,
      ``,
      `*Name:* ${escapeMarkdown(fullName)}`,
      `*Email:* ${escapeMarkdown(sanitizedEmail)}`,
      `*Phone:* ${escapeMarkdown(phone)}`,
      `*Experience:* ${escapeMarkdown(experience)}`,
      `*Telegram:* ${escapeMarkdown(telegram || "Not provided")}`,
      `*CPA Network:* ${escapeMarkdown(network || "Not provided")}`,
      `*Order ID:* \`${escapeMarkdown(razorpayOrderId)}\``,
      ``,
      `---`,
      `User cancelled or did not complete payment — VoidZero CPA`,
    ].join("\n");

    withTimeout(sendTelegramMessage(telegramMessage, "16"), OUTBOUND_TIMEOUT_MS).catch(() => {});

    return NextResponse.json({ success: true, status: "cancelled" });
  } catch (err) {
    console.error("Cancel order error:", err);
    return NextResponse.json(
      { error: "Failed to cancel order" },
      { status: 500 }
    );
  }
}
