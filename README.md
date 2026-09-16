# Nidhi Rani — Portfolio

Personal portfolio site. React + Vite + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Opens on http://localhost:5173.

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Editing content

**All copy lives in [`src/data/content.js`](src/data/content.js).** Change text, links,
projects, and skills there — the components read from that file and nothing else.

## Things you need to add

| What | Where | Notes |
| --- | --- | --- |
| Hero photo | `public/nidhi.jpg` | Portrait crop, roughly 800×1000px. Until it exists the hero shows a styled placeholder frame instead of a broken image. |
| Resume link | `RESUME_URL` at the top of `src/data/content.js` | Paste the Google Drive "anyone with the link" URL. While it's empty the Resume button renders disabled rather than linking nowhere. |

## Deploy

The build is a static `dist/` folder — any static host works.

- **Vercel / Netlify:** connect the repo, build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** push `dist/` to a `gh-pages` branch. `vite.config.js` already sets
  `base: './'` so relative asset paths work from a subdirectory.
