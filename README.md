# VoidZero CPA — Marketing Funnel

CPA affiliate marketing website for Mr. Void / VoidZero CPA. Built with Next.js 16, Tailwind CSS v4, and a pure black & white design system.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repository-url=https%3A%2F%2Fgithub.com%2Fibrahimkhan008%2FCPA)

---

<div align="center">

[⭐ Star this repo](https://github.com/ibrahimkhan008/CPA) • [🐛 Report Bug](https://github.com/ibrahimkhan008/CPA/issues) • [💡 Request Feature](https://github.com/ibrahimkhan008/CPA/issues)

</div>

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, static prerendering)
- **Styling:** Tailwind CSS v4 + CSS custom properties (monochrome design tokens)
- **Animations:** motion (formerly framer-motion)
- **UI Primitives:** Radix UI (dropdown-menu) + shadcn-style Button component
- **Fonts:** Playfair Display (display), Source Serif 4 (body), JetBrains Mono (labels)

## Pages

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
| `/terms` | Terms and Conditions |
| `/privacy` | Privacy Policy |

## Features

- **Dark / Light / System theme** — toggle in navbar, persisted to localStorage
- **Monochrome design** — zero border-radius, black & white palette, editorial textures
- **TextHoverEffect** — SVG stroke trace reveal on hero title hover
- **PointerHighlight** — expanding border + corner dot on CPA intro text
- **SneakyButton** — sliding bar animation (CSS-only, available in `components/ui/sneaky-button.tsx`)
- **Responsive hamburger nav** — works on all screen sizes
- **Section rules** — 4px black dividers between every section

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
app/
  layout.tsx          # Root layout (navbar, footer, ThemeProvider)
  page.tsx            # Home page
  globals.css         # Design tokens, typography, textures, buttons
  components/
    Navbar.tsx        # Hamburger nav + theme toggle
  [page]/page.tsx    # All routes

components/
  ThemeProvider.tsx  # Dark/light/system theme context
  ui/
    text-hover-effect.tsx
    pointer-highlight.tsx
    sneaky-button.tsx
    dropdown-menu.tsx
    button.tsx
    ThemeToggle.tsx

lib/
  utils.ts           # cn() utility (clsx + tailwind-merge)
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repository-url=https%3A%2F%2Fgithub.com%2Fibrahimkhan008%2FCPA)

All pages are statically prerendered.

### Required Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `RAZORPAY_KEY_ID` | Razorpay API key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay API key secret |
| `RAZORPAY_WEBHOOK_SECRET` | Razorpay webhook signing secret |
| `CONSULTATION_AMOUNT` | Consultation fee in paise (e.g. `49900` for ₹499) |
| `RESEND_API_KEY` | Resend email API key |
| `RESEND_FROM_EMAIL` | Sender email address (e.g. `payments@cpahustler.com`) |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token |
| `TELEGRAM_CHAT_ID` | Telegram chat/group ID |
| `TELEGRAM_MESSAGE_THREAD_ID` | Telegram thread for webinar notifications |
| `TELEGRAM_PAYMENT_THREAD_ID` | Telegram thread for payment confirmations |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay public key (client-side) |
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID |

## License

Private. All content © Mr. Void / DW Methods 2026.