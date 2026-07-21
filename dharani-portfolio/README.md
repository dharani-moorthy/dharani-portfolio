# Dharani M — Personal Portfolio

A modern, responsive personal portfolio built with **React + Vite**, populated from Dharani M's resume. Features glassmorphism cards, gradient accents, animated skill bars, a typing hero animation, scroll-reveal effects, dark/light mode, and full SEO/Open Graph metadata.

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS (utility-first styling, dark mode via class strategy)
- Framer Motion (scroll reveals, page-load animation)
- lucide-react (icons)

## Getting Started

### 1. Install Node.js

You'll need **Node.js 18+**. Check with:

```bash
node -v
```

### 2. Install dependencies

From the project root:

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

This starts Vite's dev server (usually at `http://localhost:5173`) with hot module reload.

### 4. Build for production

```bash
npm run build
```

Outputs an optimized, code-split build to `dist/`. This also generates `sitemap.xml` via `vite-plugin-sitemap`.

### 5. Preview the production build locally

```bash
npm run preview
```

## Before you deploy — personalize these

1. **Photo**: add a real photo to `public/profile.jpg` and swap the placeholder `<span>DM</span>` block in `src/components/Hero.jsx` for an `<img>` tag.
2. **Resume PDF**: add your resume file to `public/resume.pdf` (the Hero download button already links to `/resume.pdf`).
3. **Social links**: update `github`, `linkedin`, `leetcode` URLs in `src/data/resumeData.js` (`profile.socials`).
4. **Project links**: update each project's `github` and `demo` URLs in `src/data/resumeData.js`.
5. **Domain**: replace `https://dharanim.dev` in `index.html`, `vite.config.js`, and `public/robots.txt` with your real domain.
6. **Contact form**: `src/components/Contact.jsx` currently simulates a submit. Wire it up to a real service (e.g. Formspree, EmailJS, or your own API endpoint) inside `handleSubmit`.
7. **Google Map**: the embed in `Contact.jsx` points at Ooty, Tamil Nadu — swap the `src` query for your exact address if needed.
8. **Open Graph image**: add `public/og-image.jpg` (1200×630px recommended) for rich social link previews.

## Project Structure

```
src/
├── components/     # All reusable UI sections (Navbar, Hero, About, Skills, ...)
├── pages/          # Home.jsx composes all sections into the single-page layout
├── layouts/         # MainLayout.jsx wraps Navbar + Footer + BackToTop
├── hooks/           # useTheme.js (dark/light mode)
├── data/            # resumeData.js — single source of truth for all content
├── utils/           # small helpers (smooth scroll)
├── styles/          # index.css — Tailwind layers + custom design-system classes
├── App.jsx
└── main.jsx
public/
├── robots.txt
├── favicon.svg
├── resume.pdf        # add your own
└── profile.jpg        # add your own
```

## Accessibility & Performance notes

- Semantic landmarks, skip-to-content link, and visible focus rings throughout.
- Respects `prefers-reduced-motion` (disables animation/scroll-smoothing).
- Images use `loading="lazy"`; JS is code-split by Vite (`vendor` / `motion` chunks).
- Color contrast tuned for both light and dark themes against the brief's palette (`#2563EB`, `#06B6D4`, `#8B5CF6`).

## Deploying

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages). General flow:

```bash
npm run build
# then upload/deploy the generated dist/ folder
```

For Vercel/Netlify, just point them at this repo — they auto-detect Vite and run `npm run build` with output directory `dist`.
