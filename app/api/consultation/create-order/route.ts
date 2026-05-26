import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getClientIp } from "@/lib/security";

function getRazorpay() {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay credentials are not configured");
  }
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

const AMOUNT = Number(process.env.CONSULTATION_AMOUNT) || 49900;

// Whitelist of allowed experience levels — prevents arbitrary values stored as experience.
const VALID_EXPERIENCE = new Set(["beginner", "intermediate", "advanced"]);

function sanitizeField(value: unknown, maxLen = 500): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLen);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, experience, telegram, network } = body;

    // Sanitize all inputs BEFORE validation
    const sanitized = {
      fullName: sanitizeField(fullName, 200),
      email: sanitizeField(email, 320),
      phone: sanitizeField(phone, 20),
      experience: sanitizeField(experience, 50),
      telegram: sanitizeField(telegram, 100),
      network: sanitizeField(network, 200),
    };

    if (!sanitized.fullName || !sanitized.email || !sanitized.phone || !sanitized.experience) {
      return NextResponse.json(
        { error: "Name, email, phone, and experience level are required" },
        { status: 400 }
      );
    }

    // SECURITY FIX: Whitelist-validate experience — only allow known values.
    // A malicious client could POST any string as experience; without this check,
    // arbitrary values get stored in the Razorpay order notes and then in MongoDB.
    if (!VALID_EXPERIENCE.has(sanitized.experience)) {
      return NextResponse.json(
        { error: "Invalid experience level" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitized.email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // SECURITY FIX: Use centralized getClientIp that validates Vercel proxy IPs.
    // Stored in Razorpay receipt notes for audit trail and fraud detection.
    const ipAddress = getClientIp(req) ?? null;

    const order = await getRazorpay().orders.create({
      amount: AMOUNT,
      currency: "INR",
      receipt: `consultation_${Date.now()}`,
      notes: {
        fullName: sanitized.fullName,
        email: sanitized.email.toLowerCase(),
        phone: sanitized.phone,
        experience: sanitized.experience,
        telegram: sanitized.telegram || "",
        network: sanitized.network || "",
        ipAddress: ipAddress ?? "",
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
