# Personal Portfolio (Vite + React + Tailwind)

Minimal, professional portfolio for a software developer and software architect. Built as a fully static site and deployed via GitHub Pages.

## Stack

- Vite + React
- Tailwind CSS
- Multi-page build (home, imprint, privacy)

## Local development

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

This repo includes a GitHub Actions workflow in `.github/workflows/main.yml` that builds the site and deploys the `dist` folder to GitHub Pages on every push to `main`.

If you are using a project page (not a user page), update `base` in `vite.config.js` to `"/your-repo/"`.

## Customize content

Update these files with your details:

- `src/components/SiteHeader.jsx` (name, contact button)
- `src/components/Contact.jsx` (email, GitHub, LinkedIn)
- `src/pages/Imprint.jsx` (legal disclosure)
- `src/pages/Privacy.jsx` (privacy policy)
- `src/data/services.js` and `src/data/tech.js` (services and stack)

## Pages

- Home: `index.html`
- Imprint: `imprint.html`
- Privacy Policy: `privacy.html`
