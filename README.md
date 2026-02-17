# Axiom — Modern Design Studio Template

A sophisticated, production-grade landing page template built with Next.js 16, shadcn/ui, and Framer Motion. Designed with an editorial, magazine-style aesthetic.

## Features

- **Editorial Design System** — Magazine-inspired layouts with generous whitespace
- **Distinctive Typography** — Fraunces serif display font + Inter body font
- **Warm Light Palette** — Cream, alabaster, and soft earth tones
- **Smooth Animations** — Framer Motion powered transitions and reveals
- **Multi-page Structure** — Home, About, Pricing pages
- **Responsive** — Mobile-first design with breakpoints
- **Production Ready** — Optimized for deployment

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (full component library)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Fraunces (display) + Inter (body)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── page.tsx              # Homepage
├── about/page.tsx        # About page
├── pricing/page.tsx      # Pricing page
├── layout.tsx            # Root layout
└── globals.css           # Global styles & theme

components/
├── layout/               # Navigation, Footer
├── sections/             # Page sections (Hero, Work, etc.)
├── ui/                   # shadcn/ui components (50+)
└── magic/                # Custom animated components

lib/
└── utils.ts              # Utilities (cn)

hooks/
└── use-mobile.ts         # Mobile detection hook
```

## Design System

### Colors (Light Theme)
- **Background**: `#FBFBF9` (Alabaster)
- **Foreground**: `#1A1A1A` (Charcoal)
- **Secondary**: `#F0EFEA` (Cream)
- **Accent**: Sage, Terracotta, Warm Gray

### Typography
- **Display**: Fraunces (serif) — Headings, editorial text
- **Body**: Inter (sans-serif) — Paragraphs, UI text

### Utilities
- `.text-editorial` — Large display headings
- `.label-caps` — Small uppercase labels
- `.mesh-gradient` — Soft background gradients
- `.bg-noise` — Subtle noise texture overlay
- `.glass` — Frosted glass effect
- `.shadow-soft` / `.shadow-elegant` — Refined shadows

## Pages

### Homepage
- Hero with asymmetric layout
- Stats section
- Work/Projects grid
- Services grid
- Testimonials
- CTA section

### About
- Story & mission
- Core values
- Team members

### Pricing
- Pricing tiers
- À la carte services
- Contact CTA

## Customization

Edit `app/globals.css` to modify:
- CSS custom properties (`:root`)
- Color palette
- Typography scales
- Animation keyframes

## Deployment

```bash
npm run build
npm run start
```

Port: 3000 | Health Check: `/`

## License

MIT
