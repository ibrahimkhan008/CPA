import { NextRequest, NextResponse } from "next/server";
import { getConsultationBookings, getCancelledConsultations } from "@/lib/mongodb";

// SECURITY FIX: strips HTML tags AND $ prefixes to prevent NoSQL operator injection.
function sanitizeField(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return String(value)
    .replace(/<[^>]*>/g, "")
    .replace(/\$/g, " ")
    .trim()
    .slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { razorpayOrderId, email } = body;

    if (!razorpayOrderId) {
      return NextResponse.json({ error: "Order ID required" }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // SECURITY FIX: Apply sanitizeField to prevent NoSQL operator injection.
    // .toLowerCase().trim() alone passes $gt, $regex, $where through to MongoDB.
    const sanitizedOrderId = sanitizeField(razorpayOrderId, 100);
    const sanitizedEmail = sanitizeField(email, 320).toLowerCase();

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const bookings = getConsultationBookings();
    const cancelled = getCancelledConsultations();

    // SECURITY FIX: Check consultation_bookings — verify email matches to prevent IDOR.
    // Attacker who only knows order_id without knowing the associated email gets no data.
    const captured = await (await bookings).findOne({
      razorpayOrderId: sanitizedOrderId,
      paymentStatus: "captured",
      email: sanitizedEmail,
    });

    if (captured) {
      return NextResponse.json({
        confirmed: true,
        inviteLink: captured.inviteLink || null,
        whatsappLink: process.env.WHATSAPP_LINK || "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1",
      });
    }

    // SECURITY FIX: Check cancelled_consultations — also requires email match (same sanitized value)
    const wasCancelled = await (await cancelled).findOne({
      razorpayOrderId: sanitizedOrderId,
      email: sanitizedEmail,
    });

    if (wasCancelled) {
      // Return generic response — don't leak cancel state to prevent enumeration
      return NextResponse.json({ confirmed: false });
    }

    // Still pending — order exists but no capture yet
    return NextResponse.json({ confirmed: false, pending: true });
  } catch (err) {
    console.error("Payment status check error:", err);
    return NextResponse.json({ error: "Failed to check status" }, { status: 500 });
  }
}
