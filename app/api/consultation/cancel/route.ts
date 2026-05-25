import { NextRequest, NextResponse } from "next/server";
import { getConsultationBookings, getCancelledConsultations } from "@/lib/mongodb";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpayOrderId } = body;

    if (!razorpayOrderId) {
      return NextResponse.json({ error: "Order ID required" }, { status: 400 });
    }

    const bookings = getConsultationBookings();
    const cancelled = getCancelledConsultations();

    // Only cancel if still pending (don't overwrite a captured one)
    const record = await (await bookings).findOne({
      razorpayOrderId,
      paymentStatus: "pending",
    });

    if (!record) {
      // Already captured or doesn't exist
      return NextResponse.json({ success: true, status: "not_pending" });
    }

    // Insert directly into cancelled_consultations
    await (await cancelled).insertOne({
      ...record,
      paymentStatus: "cancelled",
      cancelledAt: new Date(),
    });

    // Delete from consultation_bookings
    await (await bookings).deleteOne({ razorpayOrderId });

    // Notify via Telegram
    const telegramMessage = `⚠️ *Consultation — Payment Cancelled*

*Name:* ${record.fullName}
*Email:* ${record.email}
*Phone:* ${record.phoneNumber}
*Experience:* ${record.experienceLevel}
*Telegram:* ${record.telegramUsername || "Not provided"}
*CPA Network:* ${record.currentCpaNetwork || "Not provided"}
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