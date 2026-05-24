import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendConsultationConfirmation(params: {
  to: string;
  name: string;
  telegramInviteLink: string;
  whatsappLink: string;
}): Promise<void> {
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Consultation Confirmed</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:Georgia,serif;color:#f5f5f5;">
  <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
    <div style="border:2px solid #f5f5f5;padding:40px;">
      <p style="font-family:monospace;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;color:#a3a3a3;margin:0 0 10px;">Consultation Confirmed</p>
      <h1 style="font-family:'Playfair Display',Georgia,serif;font-size:3rem;font-weight:bold;margin:0 0 20px;padding:0;">YOU'RE IN!</h1>
      <p style="font-size:18px;line-height:1.6;color:#a3a3a3;margin:0 0 30px;">
        Hi ${params.name}, your CPA consultation booking is confirmed. Join the community below and we'll reach out with next steps.
      </p>
      <div style="margin:30px 0;">
        <a href="${params.telegramInviteLink}" style="display:inline-block;background:#fff;color:#000;text-decoration:none;padding:16px 32px;font-family:monospace;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Join Telegram Group →</a>
      </div>
      <div style="margin:20px 0;">
        <a href="${params.whatsappLink}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:16px 32px;font-family:monospace;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Join WhatsApp Group →</a>
      </div>
      <p style="font-size:14px;color:#a3a3a3;line-height:1.6;margin:0;">See you in the community. Bring your questions!<br><br>— Mr. Void, VoidZero CPA</p>
    </div>
  </div>
</body>
</html>`;

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: params.to,
    subject: "Your CPA Consultation is Confirmed!",
    html,
  });
}