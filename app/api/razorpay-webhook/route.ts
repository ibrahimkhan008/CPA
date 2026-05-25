import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Razorpay from "razorpay";
import { getConsultationBookings } from "@/lib/mongodb";
import { sendTelegramMessage, createOneTimeInviteLink } from "@/lib/telegram";
import { sendConsultationConfirmation } from "@/lib/email";

const WHATSAPP_LINK = "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

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
      const order = await razorpay.orders.fetch(payment.order_id);
      const notes = order.notes ?? {};

      // Generate one-time Telegram invite link
      let inviteLink = "";
      try {
        inviteLink = await createOneTimeInviteLink();
      } catch {
        // Non-fatal
      }

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
        ipAddress: null,
        inviteLink,
      });

      const fullName = String(notes.fullName || "Customer");
      const email = String(notes.email || "");

      // Send Telegram notification to payment thread (thread ID 2)
      const telegramMessage = `💳 *New Consultation Booking*

*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${notes.phone || "—"}
*Experience:* ${notes.experience || "—"}
*Telegram:* ${notes.telegram || "Not provided"}
*CPA Network:* ${notes.network || "Not provided"}
*Payment ID:* \`${payment.id}\`
*Amount:* ₹${(payment.amount / 100).toFixed(0)}

---
Booking confirmed — VoidZero CPA`;

      try {
        await sendTelegramMessage(telegramMessage, "2");
      } catch {
        // Non-fatal
      }

      // Send consultation details to consultation thread (thread ID 3)
      const consultationMessage = `✅ *Consultation Booking Confirmed*

*Client:* ${fullName}
*Email:* ${email}
*Phone:* ${notes.phone || "—"}
*Experience Level:* ${notes.experience || "—"}
*Telegram:* ${notes.telegram || "Not provided"}
*CPA Network:* ${notes.network || "Not provided"}

━━━━━━━━━━━━━━━━━━━━
*Payment Details*
━━━━━━━━━━━━━━━━━━━━
*Order ID:* \`${payment.order_id}\`
*Payment ID:* \`${payment.id}\`
*Amount Paid:* ₹${(payment.amount / 100).toFixed(0)}
*Status:* ✅ Captured

━━━━━━━━━━━━━━━━━━━━
*Next Steps*
━━━━━━━━━━━━━━━━━━━━
• Reach out via Telegram to schedule the session
• Share curriculum and onboarding materials
• Add client to WhatsApp group

---
Booking confirmed — VoidZero CPA`;

      try {
        await sendTelegramMessage(consultationMessage, "3");
      } catch {
        // Non-fatal
      }

      if (email && inviteLink) {
        try {
          await sendConsultationConfirmation({
            to: email,
            name: fullName,
            telegramInviteLink: inviteLink,
            whatsappLink: WHATSAPP_LINK,
          });
        } catch {
          // Non-fatal
        }
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