const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const PAYMENT_THREAD_ID = process.env.TELEGRAM_MESSAGE_THREAD_ID ?? "2";

export async function sendTelegramMessage(
  message: string,
  threadId?: string
): Promise<void> {
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      message_thread_id: threadId ? Number(threadId) : undefined,
      text: message,
      parse_mode: "Markdown",
    }),
  });
}

export async function createOneTimeInviteLink(): Promise<string> {
  const linkRes = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/createChatInviteLink`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        member_limit: 1,
        expire_date: Math.floor(Date.now() / 1000) + 3600,
      }),
    }
  );
  const data = await linkRes.json();
  if (!data.ok) {
    throw new Error(`Telegram invite link error: ${data.description}`);
  }
  return data.result.invite_link as string;
}