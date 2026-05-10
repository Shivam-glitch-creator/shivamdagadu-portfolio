# Shivam Dagadu — Portfolio

A modern, dark-themed portfolio built with React + Vite.

## Tech Stack
- **React 18** + **Vite 5**
- Google Fonts: Syne (display) + DM Mono
- Pure inline CSS with CSS custom properties
- Zero UI library dependencies

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo
4. Framework: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click Deploy ✓

## Customization
- Edit `src/components/Hero.jsx` to update name/tagline
- Edit `src/components/Projects.jsx` to add/update projects
- Edit `src/components/Skills.jsx` to update tech stack
- Edit `src/index.css` CSS variables to change the color scheme
