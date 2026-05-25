import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getConsultationBookings } from "@/lib/mongodb";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const AMOUNT = Number(process.env.CONSULTATION_AMOUNT) || 49900; // ₹499 in paise

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, experience, telegram, network } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !experience) {
      return NextResponse.json(
        { error: "Name, email, phone, and experience level are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const order = await razorpay.orders.create({
      amount: AMOUNT,
      currency: "INR",
      receipt: `consultation_${Date.now()}`,
      notes: {
        fullName,
        email,
        phone,
        experience,
        telegram: telegram || "",
        network: network || "",
      },
    });

    // Save customer data immediately — webhook won't have order notes on payment.captured
    const bookings = await getConsultationBookings();
    await bookings.insertOne({
      fullName,
      email,
      phoneNumber: phone,
      experienceLevel: experience,
      telegramUsername: telegram || null,
      currentCpaNetwork: network || null,
      paymentStatus: "pending",
      razorpayPaymentId: null,
      razorpayOrderId: order.id,
      razorpaySignature: "",
      amountPaid: order.amount,
      currency: order.currency,
      source: "consultation",
      createdAt: new Date(),
      ipAddress: req.headers.get("x-forwarded-for")?.split(",")[0].trim() || null,
      inviteLink: null,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (err) {
    console.error("Razorpay order creation error:", err);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}