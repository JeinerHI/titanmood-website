# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TitanMood is a fitness app marketing website. It has two services:

- **Backend** (`/backend`): Strapi v5 CMS, serves content via REST API on port `1337`
- **Frontend** (`/frontend`): Astro v5 static site, fetches content from Strapi at build time, served on port `4321`

## Commands

### Backend (Strapi)
```bash
cd backend
npm run dev        # Start with auto-reload (development)
npm run start      # Start without auto-reload (production)
npm run build      # Build the admin panel
```

### Frontend (Astro)
```bash
cd frontend
npm run dev        # Dev server at localhost:4321
npm run build      # Build to ./dist/
npm run preview    # Preview production build
```

## Architecture

### Data Flow
The frontend is fully CMS-driven. Every page fetches content from Strapi at build time using `fetch()` in the Astro frontmatter (between `---` fences). The API base URL is set via the `PUBLIC_API_URL` environment variable (defaults to `http://localhost:1337/api`).

### Strapi Content Types
Key collection types managed in the CMS:
- `homepage` — single type with hero, features, pricing, and CTA fields
- `feature-sections` — tab sections on homepage with nested `feature_items` component
- `pricing-features` — pricing table rows (free_tier / pro_tier booleans)
- `articles` — blog posts with slug, rich text content, category relation, and SEO component
- `categories` — article categories
- `trainers`, `training-methods` — trainer/method listing pages
- `lead` — lead capture submissions from the site
- `site-setting` — global site configuration

### Rich Text Rendering
Strapi returns rich text as an array of block objects. The utility `frontend/src/utils/blocksToHtml.ts` converts these blocks (or plain markdown strings) to HTML using the `marked` library. Use `set:html={blocksToHtml(field)}` to render rich text fields in Astro templates.

### Frontend Structure
- `src/layouts/Layout.astro` — base HTML shell with SEO meta tags (title, OG, Twitter); wrap every page with this
- `src/components/Navbar.astro`, `Footer.astro` — must be imported and placed manually on each page (not auto-injected by Layout)
- `src/pages/blog/[slug].astro` — dynamic route for individual blog posts
- `src/pages/calculadora.astro` — client-side calorie calculator (no Strapi data)

### Tailwind Design Tokens
Custom colors defined in `frontend/tailwind.config.mjs`:
- `primary` / `primary-dark` / `primary-light` — blue (#1349ec)
- `bg-navy` (#0a0e1a), `surface-navy` (#161c2d) — dark backgrounds
- `bg-light` (#f8fafc) — light background
- `accent-orange` (#ff6b35), `accent-success` (#10b981), `accent-warning` (#f59e0b)
- `text-secondary` (#64748b), `text-dim` (#cbd5e1)
- Custom shadows: `shadow-soft`, `shadow-medium`, `shadow-strong`, `shadow-glow`
- Fonts: `font-sans` (Inter), `font-display` (Poppins)

Icons are provided by Bootstrap Icons (`bi bi-*` classes), loaded globally in Layout.

### Database
Backend uses PostgreSQL. Configuration via environment variables:
- `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`, `DATABASE_USERNAME`, `DATABASE_PASSWORD`
- Default DB name: `titanmood_strapi`, default user: `titanmood_user`

### Strapi API Query Patterns
- Populate relations: `?populate=category`
- Populate nested: `?populate[feature_items][populate]=*`
- Sort: `?sort=order:asc` or `?sort=publishedAt:desc`
- Strapi v5 returns data under `response.data` (not `response.data.attributes`)
