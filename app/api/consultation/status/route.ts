import { NextRequest, NextResponse } from "next/server";
import { getConsultationBookings, getCancelledConsultations } from "@/lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpayOrderId } = body;

    if (!razorpayOrderId) {
      return NextResponse.json({ error: "Order ID required" }, { status: 400 });
    }

    const bookings = getConsultationBookings();
    const cancelled = getCancelledConsultations();

    // Check consultation_bookings for captured
    const captured = await (await bookings).findOne({
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

    // Check cancelled_consultations for abandoned payment
    const wasCancelled = await (await cancelled).findOne({ razorpayOrderId });

    if (wasCancelled) {
      return NextResponse.json({
        confirmed: false,
        cancelled: true,
      });
    }

    // Still pending — order created but no webhook yet
    return NextResponse.json({
      confirmed: false,
      pending: true,
    });
  } catch (err) {
    console.error("Payment status check error:", err);
    return NextResponse.json({ error: "Failed to check status" }, { status: 500 });
  }
}