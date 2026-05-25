import { NextRequest, NextResponse } from "next/server";
import { getConsultationBookings } from "@/lib/mongodb";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpayOrderId } = body;

    if (!razorpayOrderId) {
      return NextResponse.json({ error: "Order ID required" }, { status: 400 });
    }

    const bookings = await getConsultationBookings();

    // Only cancel if still pending (don't overwrite a captured one)
    const record = await bookings.findOne({
      razorpayOrderId,
      paymentStatus: "pending",
    });

    if (!record) {
      // Already captured or doesn't exist — nothing to cancel
      return NextResponse.json({ success: true, status: "not_pending" });
    }

    await bookings.updateOne(
      { razorpayOrderId },
      { $set: { paymentStatus: "cancelled" } }
    );

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

    return NextResponse.json({
      success: true,
      status: "cancelled",
      data: {
        fullName: record.fullName,
        email: record.email,
        phoneNumber: record.phoneNumber,
        experienceLevel: record.experienceLevel,
        telegramUsername: record.telegramUsername,
        currentCpaNetwork: record.currentCpaNetwork,
      },
    });
  } catch (err) {
    console.error("Cancel order error:", err);
    return NextResponse.json(
      { error: "Failed to cancel order" },
      { status: 500 }
    );
  }
}