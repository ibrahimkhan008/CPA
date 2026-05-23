# Next.js 16 quirks (read node_modules/next/dist/docs/01-app/01-getting-started/ first)
  - `metadata` exports ONLY from Server Components — no `"use client"` + metadata on same file
  - Pattern for interactive pages: `page.tsx` (server, metadata only) + `*Client.tsx` (client, hooks)
  - `@vercel/analytics/next` and `@vercel/speed-insights/next` use `/next` suffix import path
  - `@microsoft/clarity` npm package has no dist files — use inline GTM snippet instead
  - JSX inline styles must use JSX object `style={{}}` not string `style=""` — TS catches this
  - Third-party scripts: use `next/script` with `strategy="afterInteractive"` to protect Core Web Vitals
  - Tailwind v4 uses `@theme inline {}` for design tokens, not `tailwind.config.js`

# Project patterns
  - Analytics/SpeedInsights/GTM/Clarity: client components in `components/ui/`, mounted in layout
  - Toast system: `ToastProvider` wraps app in layout, `DevBanner` triggers auto-toast via `useToast`
  - `clsx` is installed as a dependency — use it instead of template literals for conditional classes
  - `.env.local` is gitignored — force-add with `git add -f` when committing
  - `npx next build` — no `--no-lint` flag in Next.js 16
  - Multiple lockfiles in parent dirs cause Turbopack root warning — set `turbopack.root` in next.config if needed
