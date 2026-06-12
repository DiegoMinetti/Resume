# Diego Minetti — Resume

Online resume built with **React + Vite** and deployed to **GitHub Pages** via GitHub Actions.

🔗 Live: <https://diegominetti.github.io/Resume/>

## Features

- Online, mobile-friendly resume view.
- **Download as PDF** button (uses `html2pdf.js` to render the same content client-side).
- Auto-deployed on every push to `main` via `.github/workflows/deploy.yml`.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # produces ./dist
npm run preview  # preview the production build
```

## How deploy works

1. Push to `main` triggers `.github/workflows/deploy.yml`.
2. The action runs `npm ci && npm run build`, producing `dist/`.
3. `actions/upload-pages-artifact` ships it to the Pages environment.
4. `actions/deploy-pages` publishes it to GitHub Pages.

> Make sure GitHub Pages is configured to deploy from **GitHub Actions** in the repo settings
> (Settings → Pages → Build and deployment → Source: GitHub Actions).

## Editing the resume

All resume content lives in `src/App.tsx` as typed constants at the top of the file
(`PROFILE`, `CORE_EXPERTISE`, `TECH_STACK`, `ACHIEVEMENTS`, `EXPERIENCE`,
`SOFT_SKILLS`, `EDUCATION`). Edit those and push — the site updates automatically.
