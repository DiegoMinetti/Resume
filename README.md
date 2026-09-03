# Diego Minetti — Resume

Online resume built with **React + Vite** and deployed to **GitHub Pages** via GitHub Actions.

🔗 Live: <https://diegominetti.github.io/Resume/>

## Features

- Online, mobile-friendly resume view with EN/ES language switch.
- **Download as PDF** button (uses `pdfmake` to render the same content client-side).
- Auto-deployed on every push to `main` via `.github/workflows/deploy.yml`.
- **Privacy-first analytics** via self-hosted [Umami](https://umami.is).

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

All resume content lives in `src/content.ts` as the `content` object, keyed by locale
(`en` and `es`). Edit the strings there and push — the site updates automatically.

## Analytics

This site uses **Umami** (self-hosted on `analytics.fewlines.com.ar`, website ID
`76bd27ac-7575-45e5-a6c3-296e7a81f882`). Umami is privacy-first: no cookies, no
PII, no consent banner required.

### Tracked events

| Event                | When                                      | Properties                |
| -------------------- | ----------------------------------------- | ------------------------- |
| `resume_view`        | Page load + every language switch         | `lang: 'es' \| 'en'`      |
| `language_switch`    | Click on the ES/EN toggle                 | `from`, `to`              |
| `outbound-github`    | Click on the GitHub button                | —                         |
| `outbound-linkedin`  | Click on the LinkedIn button              | —                         |
| `pdf_download`       | Click on the Download PDF button          | `lang: 'es' \| 'en'`      |
| `scroll-depth`       | 25%, 50%, 75%, 100% page scroll           | `depth` (auto)            |

Plus all of Umami's built-in reports: **visit duration**, **bounce rate**, **pages**
(ES and EN show up as `?lang=es` / `?lang=en`), **referrers**, **countries**,
**devices**, **browsers**.

### What you can answer from the dashboard

- Who reviewed the resume in Spanish vs English, and how many.
- How many visitors clicked through to GitHub / LinkedIn.
- How many downloaded the PDF, and in which language.
- Whether visitors only landed or actually scrolled to the bottom.
- How long they spent on the page (a proxy for "are they reading it").

### Implementation notes

- The locale switch is SPA navigation, so `App.tsx` calls
  `umami.track({ $current_url: '.../?lang=es' })` to register a virtual
  pageview. This makes ES/EN appear as separate URLs in the Pages report.
- Outbound links use the declarative `data-umami-event` attribute on the
  anchor — no extra JS needed.
- The analytics code lives in `src/lib/umami.ts` and is resilient: it
  silently no-ops if the script is blocked or not yet loaded.
