import { NextRequest, NextResponse } from "next/server";
import { getCancelledConsultations } from "@/lib/mongodb";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpayOrderId, fullName, email, phone, experience, telegram, network } = body;

    if (!razorpayOrderId) {
      return NextResponse.json({ error: "Order ID required" }, { status: 400 });
    }

    if (!fullName || !email || !phone || !experience) {
      return NextResponse.json({ error: "Form data required" }, { status: 400 });
    }

    const cancelled = await getCancelledConsultations();

    // Idempotency: skip if already cancelled
    const existing = await cancelled.findOne({ razorpayOrderId });
    if (existing) {
      return NextResponse.json({ success: true, status: "already_cancelled" });
    }

    await cancelled.insertOne({
      fullName,
      email,
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
      ipAddress: null,
      inviteLink: null,
    });

    const telegramMessage = `⚠️ *Consultation — Payment Cancelled*

*Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}
*Experience:* ${experience}
*Telegram:* ${telegram || "Not provided"}
*CPA Network:* ${network || "Not provided"}
*Order ID:* \`${razorpayOrderId}\`

---
User cancelled or did not complete payment — VoidZero CPA`;

    try {
      await sendTelegramMessage(telegramMessage, "16");
    } catch {
      // Non-fatal
    }

    return NextResponse.json({ success: true, status: "cancelled" });
  } catch (err) {
    console.error("Cancel order error:", err);
    return NextResponse.json(
      { error: "Failed to cancel order" },
      { status: 500 }
    );
  }
}