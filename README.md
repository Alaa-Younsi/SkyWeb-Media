# SkyWeb Media

## Overview
SkyWeb Media is a personal, real-world project created by me.
It represents a digital marketing agency website for **SkyWeb Media** and showcases agency services including web development, graphic design, SEO, and social media marketing.

This is not a demo template project; it is a production-oriented personal agency website.

## Screenshot
> Add your screenshot here after deployment.
>
> Suggested path: `public/screenshot.png`
>
> Suggested markdown:
> `![SkyWeb Media Screenshot](./public/screenshot.png)`

## Table of Contents
- [Tech Stack](#tech-stack)
- [Implemented Sections](#implemented-sections)
- [Best Practices Implemented](#best-practices-implemented)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [NPM Scripts](#npm-scripts)
- [Vercel Deployment](#vercel-deployment)
- [Post-Deployment Checklist](#post-deployment-checklist)
- [Customization Notes](#customization-notes)
- [Author](#author)

## Tech Stack
- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + custom CSS utilities
- **Icons:** Lucide React, React Icons
- **Linting:** ESLint
- **Deployment Target:** Vercel

## Implemented Sections
- Sticky responsive navbar
- Hero section with CTA and stats card
- Services section
- Why Choose Us section
- Marketing Funnel section
- Statistics section
- SMMA section
- Footer with contact information, newsletter UI, and creator attribution link

## Best Practices Implemented

### 1) SEO
- Descriptive page title and meta description in `index.html`
- `robots` meta tag for indexing and preview behavior
- Open Graph tags for social sharing (`og:title`, `og:description`, `og:image`, etc.)
- Twitter Card metadata
- Structured data (JSON-LD) using `Organization` schema
- `sitemap.xml` included in `public/`
- `robots.txt` included in `public/`

### 2) Security
- Content Security Policy (CSP) added via meta tag in `index.html`
- `X-Content-Type-Options: nosniff` via meta
- Strict referrer policy (`strict-origin-when-cross-origin`)
- External attribution link in footer uses `target="_blank"` + `rel="noopener noreferrer"`
- `frame-ancestors 'none'` and restrictive CSP directives to reduce clickjacking/injection surface

### 3) Performance
- Vite production build and optimized static bundle output
- SPA deployed as static assets from `dist/`
- Manifest file (`site.webmanifest`) included for better installability and metadata
- Lightweight component architecture and reusable UI sections

### 4) Responsiveness & UX
- Mobile-first layout with Tailwind utility classes
- Hero stats card responsiveness fix for phone view (card no longer clips on small screens)
- Consistent spacing and adaptive grid layout across sections

### 5) Code Quality
- TypeScript strict mode enabled
- ESLint configured for code quality checks
- `@types/node` added to satisfy `tsconfig.node.json` and tooling type requirements

## Project Structure
```text
skyweb-media/
├─ public/
│  ├─ favicon.png
│  ├─ logo.png
│  ├─ robots.txt
│  ├─ sitemap.xml
│  ├─ site.webmanifest
│  └─ vite.svg
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  ├─ MarketingFunnel.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ Services.tsx
│  │  ├─ SMMA.tsx
│  │  ├─ Statistics.tsx
│  │  └─ WhyChooseUs.tsx
│  ├─ types/
│  │  └─ index.ts
│  ├─ App.tsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.tsx
├─ index.html
├─ vercel.json
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.ts
├─ tsconfig.json
├─ tsconfig.app.json
├─ tsconfig.node.json
└─ eslint.config.js
```

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Start development server
```bash
npm run dev
```

### 3) Build for production
```bash
npm run build
```

### 4) Preview production build locally
```bash
npm run preview
```

## NPM Scripts
- `npm run dev` → starts Vite development server
- `npm run build` → runs TypeScript checks and creates production build in `dist/`
- `npm run preview` → serves the production build locally
- `npm run lint` → runs ESLint across the project

## Vercel Deployment
This project includes a ready `vercel.json` with:
- `framework: "vite"`
- `buildCommand: "npm run build"`
- `outputDirectory: "dist"`
- SPA rewrite rule: all routes rewrite to `/index.html`

### Deploy Steps
1. Push repository to GitHub/GitLab/Bitbucket.
2. Import the project into Vercel.
3. Keep default install/build commands (already aligned with project).
4. Deploy.

## Post-Deployment Checklist
Before going live, update placeholder URLs currently using `https://example.com`:
- `index.html` → JSON-LD `url`
- `public/robots.txt` → sitemap URL
- `public/sitemap.xml` → `<loc>` URL

Optional but recommended:
- Replace social preview image with final marketing image.
- Add your final screenshot to README.
- Run `npm run lint` before each production release.

## Customization Notes
- Update branding assets in `public/` (`logo.png`, `favicon.png`).
- Update section copy inside `src/components/*`.
- Keep metadata in `index.html`, `robots.txt`, and `sitemap.xml` synchronized whenever domain or branding changes.

## Author
Created and maintained by **Alaa Younsi**.
