# Plan Sight Estimating

Modern marketing website for a construction estimating company — portfolio showcase, trade/service filters, multi-theme UI, and a Brevo-powered contact form with file attachments.

**Live site:** [plansightestimating.com](https://plansightestimating.com)

**Contact:** [plansightestimating@gmail.com](mailto:plansightestimating@gmail.com)

---

## Overview

Plan Sight Estimating helps contractors, developers, and design professionals get accurate **construction cost estimates**, **material takeoffs**, and project documentation. This repo is the public-facing website: three main pages, a filterable project portfolio, documentation services CTA, and an estimate request form.

Built as a fast **React + Vite** single-page app, deployed on **Vercel**, with SEO basics (sitemap, robots, Open Graph, structured data).

---

## Features

- **Home** — Hero, client categories, filterable portfolio grid, documentation services CTA
- **About** — Mission, vision, and “Why Plan Sight Estimating”
- **Contact** — Estimate request form with trade/service category, optional file upload (PDF, Word, Excel, images, ZIP)
- **Three themes** — Light, coffee/warm, and dark with matching logo variants
- **Trade filters** — Flooring, MEP, metal, lumber, concrete, masonry, paint, drywall
- **Client types** — General contractors, subs, architects, engineers, owners/developers, suppliers
- **Email integration** — Brevo transactional API from the frontend
- **SEO** — `sitemap.xml`, `robots.txt`, meta tags, JSON-LD, per-page titles
- **SPA routing on Vercel** — `vercel.json` rewrites so `/about` and `/contact` work on reload

---

## Tech Stack

| Layer | Tools |
|--------|--------|
| UI | React 19, TypeScript, Tailwind CSS 4 |
| Routing | React Router 7 |
| Build | Vite 6 |
| Icons | Lucide React |
| Email | Brevo SMTP API |
| Deploy | Vercel |

---

## Pages

| Route | Description |
|--------|-------------|
| `/` | Portfolio, trade categories, client types, documentation CTA |
| `/about` | Company mission, vision, differentiators |
| `/contact` | Consultation form + sidebar with process overview |

---

## Project Structure

```
src/
├── components/
│   ├── about/          # Mission, vision, why-us sections
│   ├── contact/        # Form + sidebar
│   ├── home/           # Hero, portfolio, filters, CTA, modal
│   └── layout/         # Header, footer, theme picker, layout shell
├── config/
│   ├── brand.ts        # Brand name, email, logos, theme-aware logo helpers
│   └── seo.ts          # Page titles, descriptions, usePageMeta hook
├── context/            # Theme + contact draft state
├── data/               # Portfolio, about copy, services, why-us content
├── hooks/              # Contact form, body scroll lock
├── lib/                # Brevo email + attachment handling
└── pages/              # Home, About, Contact route pages
public/
├── sitemap.xml
├── robots.txt
├── site.webmanifest
└── favicons
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run

```bash
git clone https://github.com/YOUR_USERNAME/PlanSightEstimation.git
cd PlanSightEstimation
npm install
cp .env.example .env.local
npm run dev
```

Open the URL shown in the terminal (default: `http://localhost:5173`).

### Environment variables

Create `.env.local` (or `.env`) in the project root:

```bash
VITE_BREVO_EMAIL=plansightestimating@gmail.com
VITE_BREVO_API_KEY=your_brevo_api_key
```

| Variable | Description |
|----------|-------------|
| `VITE_BREVO_EMAIL` | Verified sender/recipient email in Brevo |
| `VITE_BREVO_API_KEY` | Brevo API key from [Brevo → SMTP & API](https://app.brevo.com) |

Restart the dev server after changing env vars.

> **Note:** The Brevo API key is bundled in the frontend build. For production hardening, move email sending to a serverless function later.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript check (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` |

---

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set **Framework Preset** to **Vite**
4. **Build command:** `npm run build`
5. **Output directory:** `dist`
6. Add environment variables under **Settings → Environment Variables**:
   - `VITE_BREVO_EMAIL`
   - `VITE_BREVO_API_KEY`
7. Deploy

The included `vercel.json` fixes **404 on page reload** for client-side routes (`/about`, `/contact`):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## SEO Checklist

After deploy, help Google index the site:

1. Confirm these URLs load:
   - `https://plansightestimating.com/robots.txt`
   - `https://plansightestimating.com/sitemap.xml`
2. Add the site in [Google Search Console](https://search.google.com/search-console)
3. Submit sitemap: `https://plansightestimating.com/sitemap.xml`
4. Request indexing for the homepage
5. Link the site from GitHub, LinkedIn, and other profiles

Indexing can take days to weeks for new domains.

---

## Customization

| What to change | Where |
|----------------|--------|
| Company name, email, domain | `src/config/brand.ts` |
| Page titles & descriptions | `src/config/seo.ts` |
| Portfolio projects | `src/data/portfolio.ts` |
| Trade / client categories | `src/categories.ts` |
| About & why-us copy | `src/data/about.ts`, `src/data/whyUs.ts` |
| Logos | `src/assets/images/logo/` |
| Sitemap URLs | `public/sitemap.xml`, `public/robots.txt` |

---

## License

All rights reserved © Plan Sight Estimating.

---

## Keywords

`construction estimating` · `material takeoffs` · `cost estimation` · `shop drawings` · `permit sets` · `React portfolio` · `Vite` · `Tailwind CSS` · `Brevo contact form` · `contractor website`
