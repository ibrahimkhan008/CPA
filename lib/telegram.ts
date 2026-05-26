const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;
const PAYMENT_THREAD_ID = process.env.TELEGRAM_MESSAGE_THREAD_ID ?? "2";

// SECURITY: Timeout for all Telegram API calls to prevent webhook hangs
const TELEGRAM_TIMEOUT_MS = 8000;

async function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Telegram API call timed out")), ms);
    promise.finally(() => clearTimeout(timer)).then(resolve, reject);
  });
}

async function telegramFetch(body: unknown): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timeout);
    return res;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}

export async function sendTelegramMessage(
  message: string,
  threadId?: string
): Promise<void> {
  const res = await telegramFetch({
    chat_id: CHAT_ID,
    message_thread_id: threadId ? Number(threadId) : undefined,
    text: message,
    parse_mode: "Markdown",
  });

  if (!res.ok) {
    throw new Error(`Telegram API error: ${res.status}`);
  }
}

export async function createOneTimeInviteLink(): Promise<string> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TELEGRAM_TIMEOUT_MS);

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/createChatInviteLink`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          member_limit: 1,
          expire_date: Math.floor(Date.now() / 1000) + 3600,
        }),
        signal: controller.signal,
      }
    );
    clearTimeout(timeout);

    const data = await res.json();
    if (!data.ok) {
      throw new Error(`Telegram invite link error: ${data.description}`);
    }
    return data.result.invite_link as string;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
}