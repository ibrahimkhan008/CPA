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
    const booking = await bookings.findOne({
      razorpayOrderId,
      paymentStatus: "captured",
    });

    if (booking) {
      return NextResponse.json({
        confirmed: true,
        inviteLink: booking.inviteLink || null,
        whatsappLink: "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1",
      });
    }

    return NextResponse.json({ confirmed: false });
  } catch (err) {
    console.error("Payment status check error:", err);
    return NextResponse.json({ error: "Failed to check status" }, { status: 500 });
  }
}