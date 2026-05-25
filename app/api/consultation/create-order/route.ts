import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const AMOUNT = Number(process.env.CONSULTATION_AMOUNT) || 49900;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, experience, telegram, network } = body;

    if (!fullName || !email || !phone || !experience) {
      return NextResponse.json(
        { error: "Name, email, phone, and experience level are required" },
        { status: 400 }
      );
    }

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