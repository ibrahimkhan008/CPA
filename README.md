# VoidZero CPA — Marketing Funnel

> CPA affiliate marketing platform built with Next.js 16. Zero fluff. Pure conversion.

**Powered by:** MD Ibrahim Arman (`@ibrahimkhan008`) · [VoidZero.in](https://VoidZero.in)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repository-url=https%3A%2F%2Fgithub.com%2Fibrahimkhan008%2FCPA)

---

<div align="center">

[⭐ Star](https://github.com/ibrahimkhan008/CPA/stargazers) · [🐛 Bugs](https://github.com/ibrahimkhan008/CPA/issues) · [💡 Features](https://github.com/ibrahimkhan008/CPA/discussions)

</div>

---

## 🔑 Features

| Feature | Description |
|---|---|
| **Dark / Light / System theme** | Toggle in navbar, persisted to localStorage |
| **Monochrome design** | Zero border-radius, black & white palette, editorial textures |
| **TextHoverEffect** | SVG stroke trace reveal on hero title hover |
| **PointerHighlight** | Expanding border + corner dot on CPA intro text |
| **SneakyButton** | Sliding bar animation (CSS-only) |
| **Responsive hamburger nav** | Works on all screen sizes |
| **Section rules** | 4px black dividers between every section |
| **Razorpay payments** | Consultation fee collection with webhook verification |
| **Email notifications** | Resend-powered Telegram + email on webinar reg & payments |
| **Rate limiting** | Order creation & webinar registration protected |
| **Security headers** | CSP, allowlist webhooks, IDOR & injection protections |

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router, static prerendering)
- **Styling:** Tailwind CSS v4 + CSS custom properties (monochrome design tokens)
- **Animations:** motion (formerly framer-motion)
- **UI Primitives:** Radix UI (dropdown-menu) + shadcn-style Button component
- **Fonts:** Playfair Display (display), Source Serif 4 (body), JetBrains Mono (labels)
- **Payments:** Razorpay (checkout, webhooks, webhook signature verification)
- **Email:** Resend API
- **Database:** MongoDB (Mongoose ODM)
- **Notifications:** Telegram Bot API

---

## 📁 Pages

| Route | Description |
|---|---|
| `/` | Home — hero, CPA intro, curriculum preview, pricing, mentor, CTA |
| `/cpa` | What is CPA — intro to CPA affiliate marketing |
| `/curriculum` | Full curriculum — modules, methods, systems |
| `/pricing` | Pricing — Basic (₹5,000), Premium (₹10,000), Elite (₹20,000) |
| `/mentor` | Mentor profile — Mr. Void bio, stats, timeline |
| `/webinar` | Free webinar registration |
| `/consultation` | Book a consultation |
| `/proofs` | Earnings proofs — gallery with filters |
| `/about` | About VoidZero — mission, stats, transformations |
| `/faq` | FAQ — searchable accordion by category |
| `/refund` | Refund policy |
| `/shipping` | Shipping info |
| `/terms` | Terms and Conditions |
| `/privacy` | Privacy Policy |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🔒 Security

This codebase has been through a full security audit. See:

- **[SECURITY_AUDIT_REPORT.md](SECURITY_AUDIT_REPORT.md)** — All findings documented (pre-patch)
- **[SECURITY_PATCH_REPORT.md](SECURITY_PATCH_REPORT.md)** — Applied fixes with file references

Key protections in place:
- IDOR mitigation in payment status endpoint
- NoSQL injection prevention via input sanitization
- Timing-attack resistant constant-time email comparison
- Webhook event allowlist (only `payment.captured`, `payment.failed`)
- Order creation & webinar registration rate limiting
- XSS prevention via HTML encoding + CSP headers
- CSP policy with GTM allowlist (no unsafe-eval)

---

## 🔧 Environment Variables

Copy `.env.local.example` to `.env.local` and fill in the values:

```bash
# Database
MONGODB_URI=

# Razorpay
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
NEXT_PUBLIC_RAZORPAY_KEY_ID=

# Email (Resend)
RESEND_API_KEY=
RESEND_FROM_EMAIL=

# Telegram Notifications
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_MESSAGE_THREAD_ID=   # Webinar registrations
TELEGRAM_PAYMENT_THREAD_ID=    # Payment confirmations

# Site
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CLARITY_ID=        # Microsoft Clarity

# Consultation
CONSULTATION_AMOUNT=           # In paise, e.g. 49900 = ₹499
```

---

## 🌐 Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repository-url=https%3A%2F%2Fgithub.com%2Fibrahimkhan008%2FCPA)

All pages are statically prerendered. API routes run on Edge Runtime.

> **Note:** The `/api/razorpay-webhook` route must be set to `nodejs18.x` or `nodejs20.x` runtime — Razorpay webhooks use the `crypto` module which is not available on the Edge runtime.

---

## 📂 Project Structure

```
CPA/
├── app/                      # Next.js App Router pages & API routes
│   ├── api/                  # API endpoints
│   │   ├── consultation/     # create-order, status, verify-payment, cancel
│   │   ├── razorpay-webhook/ # Payment webhook handler
│   │   └── webinar-register/ # Webinar registration
│   └── [page]/page.tsx       # All public pages
├── components/               # Shared UI components
│   ├── ui/                   # Primitives (button, dropdown, toast, etc.)
│   └── shugar/              # Extra UI components
├── lib/                      # Utilities & integrations
│   ├── email.ts             # Resend email wrapper
│   ├── mongodb.ts           # MongoDB connection singleton
│   ├── security.ts          # htmlEncode, validateCommunityUrl, timingSafeEqual
│   ├── telegram.ts          # Telegram bot notification wrapper
│   └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── public/                   # Static assets
├── next.config.ts            # CSP headers, image domains, output config
├── globals.css              # Design tokens, typography, textures
└── package.json
```

---

## 🔐 Security Policy

If you find a security vulnerability, please **do not open a public GitHub issue**. Instead, contact the maintainer directly.

---

*Maintained by [MD Ibrahim Arman](https://github.com/ibrahimkhan008) · All content © Mr. Void / VoidZero CPA 2026*# test
