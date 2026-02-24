# SkyWeb Media

## Overview
SkyWeb Media is a personal, real-world project created by **Alaa Younsi** (professional full-stack web developer). It presents a digital marketing agency website for SkyWeb Media, showcasing services such as web development, graphic design, SEO, and social media marketing.

## Screenshot
> Add your screenshot here after deployment.
>
> Suggested path: `public/screenshot.png`
>
> Suggested markdown:
> `![SkyWeb Media Screenshot](./public/screenshot.png)`

## Tech Stack
- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS, custom CSS
- **Icons:** Lucide React, React Icons
- **Code Quality:** ESLint

## Features
- Single-page agency website with reusable React components
- Responsive layout for desktop and mobile
- Service and value proposition sections
- Footer contact area and newsletter UI
- Basic SEO, social metadata, and crawler files (`robots.txt`, `sitemap.xml`, `site.webmanifest`)

## Project Structure
```text
skyweb-media/
├─ public/
│  ├─ favicon.png
│  ├─ logo.png
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ site.webmanifest
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
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.ts
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

### 4) Preview production build
```bash
npm run preview
```

## Scripts
- `npm run dev` - starts the Vite development server
- `npm run build` - runs TypeScript checks and builds production assets
- `npm run preview` - serves the production build locally
- `npm run lint` - runs ESLint checks

## SEO and Deployment Notes
- Update the production domain placeholders currently set to `https://example.com` in:
  - `index.html` (structured data URL)
  - `public/robots.txt` (sitemap URL)
  - `public/sitemap.xml` (`<loc>` value)
- Keep metadata and sitemap aligned with your final deployed URL.

## Author
Created by **Alaa Younsi**.
