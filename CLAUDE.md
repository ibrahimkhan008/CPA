# CLAUDE.md

h3llo world
  - `metadata` exports ONLY from Server Components — no `"use client"` + metadata on same file
  - Pattern for interactive pages: `page.tsx` (server, metadata only) + `*Client.tsx` (client, hooks)
  - `@vercel/analytics/next` and `@vercel/speed-insights/next` use `/next` suffix import path
  - `@microsoft/clarity` npm package has no dist files — use inline GTM snippet instead
  - JSX inline styles must use JSX object `style={{}}` not string `style=""` — TS catches this
  - Third-party scripts: use `next/script` with `strategy="afterInteractive"` to protect Core Web Vitals
  - Tailwind v4 uses `@theme inline {}` for design tokens, not `tailwind.config.js`
  - Security utilities (IP extraction) live in `lib/security.ts` — DO NOT define `getClientIp` locally in routes

# Project patterns
  - Analytics/SpeedInsights/GTM/Clarity: client components in `components/ui/`, mounted in layout
  - Toast system: `ToastProvider` wraps app in layout, `DevBanner` triggers auto-toast via `useToast`
  - `clsx` is installed as a dependency — use it instead of template literals for conditional classes
  - `.env.local` is gitignored — force-add with `git add -f` when committing
  - `npx next build` — no `--no-lint` flag in Next.js 16
  - Multiple lockfiles in parent dirs cause Turbopack root warning — set `turbopack.root` in next.config if needed
  - `WHATSAPP_LINK` comes from `process.env.WHATSAPP_LINK` — see `.env.local.example`

# Security
  - Run `npx next build` before every deploy to verify TypeScript compiles clean
  - See `SECURITY_AUDIT_REPORT.md` for the full security audit (dated 2026-05-26)
  - All IP extraction goes through `lib/security.ts` — never implement `getClientIp` inline in routes
  - Experience field must be validated server-side: only `beginner`, `intermediate`, `advanced` accepted
  - All user values in emails must be HTML-encoded via `htmlEncode()` in `lib/email.ts`
