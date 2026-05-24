import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getConsultationBookings } from "@/lib/mongodb";
import { sendTelegramMessage, createOneTimeInviteLink } from "@/lib/telegram";
import { sendConsultationConfirmation } from "@/lib/email";

const WHATSAPP_LINK = "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1";

// Secret from Razorpay webhook settings
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

    // Verify webhook authenticity
    if (!verifyWebhookSignature(rawBody, signature)) {
      console.error("Invalid webhook signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;

    console.error("Webhook received:", JSON.stringify(payload));

    // Handle payment.captured — this is our primary success trigger
    if (event === "payment.captured") {
      const payment = payload.payload?.payment?.entity;
      const order = payload.payload?.order?.entity;

      console.error("Payment entity:", JSON.stringify(payment));
      console.error("Order entity:", JSON.stringify(order));

      if (!payment || !order) {
        console.error("Missing payment or order data in webhook");
        return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
      }

      const notes = order.notes ?? {};
      const fullName = notes.name || notes.fullName || "Customer";
      const email = notes.email || "";
      const phone = notes.phone || "";
      const experience = notes.experience || "";
      const telegram = notes.telegram || "";
      const network = notes.network || "";

      // Check if already saved (idempotency)
      const bookings = await getConsultationBookings();
      const existing = await bookings.findOne({
        razorpayPaymentId: payment.id,
      });

      if (existing) {
        // Already processed — skip
        return NextResponse.json({ success: true, status: "already_processed" });
      }

      // Generate one-time Telegram invite link
      let inviteLink = "";
      try {
        inviteLink = await createOneTimeInviteLink();
      } catch (linkErr) {
        console.error("Failed to create Telegram invite link:", linkErr);
        // Continue anyway — we still want to save the booking
      }

      // Save to MongoDB
      await bookings.insertOne({
        fullName,
        email,
        phoneNumber: phone,
        experienceLevel: experience,
        telegramUsername: telegram || null,
        currentCpaNetwork: network || null,
        paymentStatus: "captured",
        razorpayPaymentId: payment.id,
        razorpayOrderId: order.id,
        razorpaySignature: "",
        amountPaid: payment.amount,
        currency: payment.currency,
        source: "consultation",
        createdAt: new Date(),
        ipAddress: null,
        inviteLink,
      });

      // Send Telegram notification to payment channel
      const telegramMessage = `💳 *New Consultation Booking*

*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}
*Experience:* ${experience}
*Telegram:* ${telegram || "Not provided"}
*CPA Network:* ${network || "Not provided"}
*Payment ID:* \`${payment.id}\`
*Amount:* ₹${(payment.amount / 100).toFixed(0)}

---
Booking confirmed via webhook — VoidZero CPA`;

      try {
        await sendTelegramMessage(telegramMessage, "2");
      } catch (telegramErr) {
        console.error("Telegram notification failed:", telegramErr);
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
        } catch (emailErr) {
          console.error("Email sending failed:", emailErr);
        }
      }

      return NextResponse.json({ success: true, status: "processed" });
    }

    // Handle payment.failed — log for now
    if (event === "payment.failed") {
      const payment = payload.payload?.payment?.entity;
      console.error("Payment failed:", payment?.id, payment?.error_description);
      return NextResponse.json({ success: true, status: "logged" });
    }

    // Acknowledge other events
    return NextResponse.json({ success: true, status: "event_acknowledged" });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}