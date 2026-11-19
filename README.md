# Ethan Bennett’s portfolio

Eleventy builds the portfolio into static HTML and CSS.

## Work locally

```powershell
npm ci
npm run preview
```

Open the local address printed by Eleventy. Preview includes drafts and watches for changes. Edit the pages and stylesheet in `public/` and the shared navigation and article templates in `public/_includes/`.

## Write a build note

Create a Markdown file under `public/notes/`. The filename becomes the URL slug. Add `title`, `date` (YYYY-MM-DD), `summary`, `tags`, and `draft: true` at the top, following either starter draft. Once the post is ready, set the publication date and change `draft` to `false`. The Build Notes index and the latest notes on the homepage update automatically.

## Build and deploy

Run `npm run build` to generate the public site in `_site/`. The production build excludes drafts from the output and listings. The Firebase workflow builds before deploying. The Firebase project ID in the workflow is still a placeholder and needs a configured project before that path can deploy.

The GitHub Pages branch setup uses `main` and `/docs`, including `docs/.nojekyll`. If Pages is your host, include updated `docs/` output in the publishing commit. Run the production build, copy its output into `docs/`, and remove any stale generated pages. The repository's sync workflow also mirrors the production build to `docs/`.
