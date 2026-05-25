import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getConsultationBookings } from "@/lib/mongodb";
import { sendTelegramMessage, createOneTimeInviteLink } from "@/lib/telegram";
import { sendConsultationConfirmation } from "@/lib/email";

const WHATSAPP_LINK = "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1";

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

      // Look up by order ID from the payment entity
      const orderId = payment.order_id;
      const record = await bookings.findOne({ razorpayOrderId: orderId });

      if (!record) {
        // Order not found — could be from a different source, acknowledge silently
        return NextResponse.json({ success: true, status: "order_not_found" });
      }

      const fullName = record.fullName;
      const email = record.email;

      // Generate one-time Telegram invite link
      let inviteLink = "";
      try {
        inviteLink = await createOneTimeInviteLink();
      } catch {
        // Non-fatal — booking still confirmed without invite link
      }

      // Update MongoDB record
      await bookings.updateOne(
        { razorpayOrderId: orderId },
        {
          $set: {
            paymentStatus: "captured",
            razorpayPaymentId: payment.id,
            inviteLink,
          },
        }
      );

      // Send Telegram notification to payment thread (thread ID 2)
      const telegramMessage = `💳 *New Consultation Booking*

*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${record.phoneNumber}
*Experience:* ${record.experienceLevel}
*Telegram:* ${record.telegramUsername || "Not provided"}
*CPA Network:* ${record.currentCpaNetwork || "Not provided"}
*Payment ID:* \`${payment.id}\`
*Amount:* ₹${(payment.amount / 100).toFixed(0)}

---
Booking confirmed — VoidZero CPA`;

      try {
        await sendTelegramMessage(telegramMessage, "2");
      } catch {
        // Non-fatal
      }

      // Send confirmation email
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