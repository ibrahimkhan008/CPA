# VoidZero CPA — Marketing Funnel

CPA affiliate marketing website for Mr. Void / DW Methods. Built with Next.js 16, Tailwind CSS v4, and a pure black & white design system.

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

Deploy to Vercel with zero configuration:

```bash
npm install
vercel
```

All pages are statically prerendered — no server needed.

## License

Private. All content © Mr. Void / DW Methods 2026.