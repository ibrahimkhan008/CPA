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

    // Only cancel if still in bookings collection (don't double-process)
    const record = await (await bookings).findOne({
      razorpayOrderId,
    });

    if (!record) {
      // Already moved or doesn't exist — nothing to cancel
      return NextResponse.json({ success: true, status: "not_found" });
    }

    // Move to cancelled_consultations collection
    await (await cancelled).insertOne({
      ...record,
      paymentStatus: "cancelled",
      cancelledAt: new Date(),
    });

    // Remove from bookings collection
    await (await bookings).deleteOne({ razorpayOrderId });

    // Notify via Telegram so you never lose a lead
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