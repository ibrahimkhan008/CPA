import { NextRequest, NextResponse } from "next/server";
import { getConsultationBookings } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpayOrderId } = body;

    if (!razorpayOrderId) {
      return NextResponse.json({ error: "Order ID required" }, { status: 400 });
    }

    const bookings = await getConsultationBookings();

    // Check for captured (webhook confirmed)
    const captured = await bookings.findOne({
      razorpayOrderId,
      paymentStatus: "captured",
    });

    if (captured) {
      return NextResponse.json({
        confirmed: true,
        inviteLink: captured.inviteLink || null,
        whatsappLink: "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1",
      });
    }

    // Check for cancelled (user cancelled or didn't complete)
    const cancelled = await bookings.findOne({
      razorpayOrderId,
      paymentStatus: "cancelled",
    });

    if (cancelled) {
      return NextResponse.json({
        confirmed: false,
        cancelled: true,
        message: "Payment was not completed. Your details were saved — click below to try again.",
      });
    }

    // Still pending — order created but no webhook yet (normal for UPI)
    return NextResponse.json({
      confirmed: false,
      pending: true,
    });
  } catch (err) {
    console.error("Payment status check error:", err);
    return NextResponse.json({ error: "Failed to check status" }, { status: 500 });
  }
}