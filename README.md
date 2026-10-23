# Dylan Hartland — Portfolio

Personal portfolio site, built with React + Vite and deployed to GitHub Pages.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
npm run preview
```

## Deploy

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

The site is served from `/pages-test/` (set via `base` in `vite.config.ts`) at:
https://deelan99.github.io/pages-test/
