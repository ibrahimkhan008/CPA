import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getConsultationBookings } from "@/lib/mongodb";
import { sendTelegramMessage, createOneTimeInviteLink } from "@/lib/telegram";
import { sendConsultationConfirmation } from "@/lib/email";

const WHATSAPP_LINK = "https://chat.whatsapp.com/GG6eC15vtOq9LDQen79Kj1";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      experience,
      telegram,
      network,
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !experience) {
      return NextResponse.json(
        { error: "Name, email, phone, and experience level are required" },
        { status: 400 }
      );
    }

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Payment verification data missing" },
        { status: 400 }
      );
    }

    // Verify Razorpay signature server-side
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // All verification passed — proceed with data storage and notifications

    // 1. Save to MongoDB
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : undefined;

    const bookings = await getConsultationBookings();
    await bookings.insertOne({
      fullName: name,
      email,
      phoneNumber: phone,
      experienceLevel: experience,
      telegramUsername: telegram || null,
      currentCpaNetwork: network || null,
      paymentStatus: "captured",
      razorpayPaymentId: razorpay_payment_id,
      razorpayOrderId: razorpay_order_id,
      razorpaySignature: razorpay_signature,
      amountPaid: Number(process.env.CONSULTATION_AMOUNT) || 49900,
      currency: "INR",
      source: "consultation",
      createdAt: new Date(),
      ipAddress: ipAddress || null,
    });

    // 2. Generate one-time Telegram invite link
    const inviteLink = await createOneTimeInviteLink();

    // 3. Send Telegram notification to payment channel (thread 2)
    const telegramMessage = `💳 *New Consultation Booking*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Experience:* ${experience}
*Telegram:* ${telegram || "Not provided"}
*CPA Network:* ${network || "Not provided"}
*Payment ID:* \`${razorpay_payment_id}\`
*Amount:* ₹499

---
New booking confirmed via VoidZero CPA Website`;

    await sendTelegramMessage(telegramMessage, "2");

    // 4. Send confirmation email
    try {
      await sendConsultationConfirmation({
        to: email,
        name,
        telegramInviteLink: inviteLink,
        whatsappLink: WHATSAPP_LINK,
      });
    } catch (emailErr) {
      // Don't fail the whole response if email fails
      console.error("Email sending failed:", emailErr);
    }

    return NextResponse.json({
      success: true,
      inviteLink,
      whatsappLink: WHATSAPP_LINK,
    });
  } catch (err) {
    console.error("Consultation verify-payment error:", err);
    return NextResponse.json(
      { error: "Failed to process payment" },
      { status: 500 }
    );
  }
}