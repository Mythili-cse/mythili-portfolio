# Mythili L — Portfolio

A production-ready developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** for styling
- **Framer Motion** for animation
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

Output is generated in `dist/`.

## Editing content

All copy lives in a single file: `src/data/portfolio.ts` — name, summary, skills,
internships, projects, education, certifications, and achievements. Edit that file
and every section updates automatically; no need to touch component code for content changes.

## Adding your resume

Drop a PDF named `Mythili_L_Resume.pdf` into the `public/` folder. The hero's
"Download Resume" button already links to `/Mythili_L_Resume.pdf`.

## Deploying

This is a static site — it deploys as-is to Vercel, Netlify, GitHub Pages, or
Render's static site hosting. Build command: `npm run build`. Output directory: `dist`.

## Project structure

```
src/
  components/     UI components (Hero, Navbar, Skills, Projects, etc.)
  data/           Central content file (portfolio.ts)
  App.tsx         Page composition
  index.css       Design tokens & global styles
tailwind.config.js  Color palette, fonts, animation tokens
```
.....
