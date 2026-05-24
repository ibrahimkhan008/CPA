import { NextRequest, NextResponse } from "next/server";
import { getWebinarRegistrations } from "@/lib/mongodb";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_MESSAGE_THREAD_ID = process.env.TELEGRAM_MESSAGE_THREAD_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, interest, telegram } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    // Capture IP address
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ipAddress = forwardedFor ? forwardedFor.split(",")[0].trim() : undefined;

    // Send to MongoDB
    const registrations = await getWebinarRegistrations();
    await registrations.insertOne({
      fullName: name,
      email,
      whatsappNumber: phone || null,
      telegramUsername: telegram || null,
      interest: interest || null,
      source: "webinar",
      createdAt: new Date(),
      ipAddress: ipAddress || null,
    });

    // Send to Telegram (keep existing behavior)
    const message = `🎙 *New Webinar Registration*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone || "Not provided"}
*Telegram:* ${telegram || "Not provided"}
*Interest:* ${interest || "Not specified"}

---
Sent via VoidZero CPA Website`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          message_thread_id: TELEGRAM_MESSAGE_THREAD_ID ? Number(TELEGRAM_MESSAGE_THREAD_ID) : undefined,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      console.error("Telegram API error:", await telegramRes.text());
      // Don't fail the request if Telegram fails — MongoDB save succeeded
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}