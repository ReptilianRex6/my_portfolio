# Ethan Bennett’s portfolio

Eleventy builds the portfolio into static HTML and CSS. Project write-ups live in `public/notes/` and drive the homepage, the work page, and the notes index.

## Work locally

```powershell
npm ci
npm run preview
```

The same two commands work in any shell. Open the local address printed by Eleventy. Preview includes drafts and watches for changes.

Edit pages in `public/`, shared templates in `public/_includes/`, and styles in `public/styles.css`. Contact details used across the site live in `public/_data/site.js`.

## Write a build note

Create a Markdown file under `public/notes/`. The filename becomes the URL slug. Front matter:

- `title`
- `date` (`YYYY-MM-DD`)
- `summary` — one or two sentences
- `status` — `shipped`, `prototype`, or `planned`
- `role` — what you did, in a sentence
- `tools` — a short list
- `tags`
- `order` — lower numbers appear first
- `draft` — `true` until the note should ship

Optional: `repo`, `repoLabel`, `link`, `linkLabel`, `linkText`.

Shipped means the work is in use. Prototype means it works and is not live or not finished. Planned means it is not built yet. Say what is still open inside the note instead of inventing an outcome.

Set `draft: false` when the note is ready. The production build drops drafts from the output and from every listing. Preview (`npm run preview`) still shows them, with a draft label.

## Build and deploy

Run `npm run build` to generate the public site in `_site/`. Pull requests run that same build. Firebase Hosting deploys only after `.firebaserc` has a real project id (it is still `YOUR_FIREBASE_PROJECT_ID`) and the `FIREBASE_SERVICE_ACCOUNT` secret is set. Until then the workflow builds the site and skips the deploy.

The GitHub Pages setup uses `main` and `/docs`, including `docs/.nojekyll`. The sync workflow mirrors a production build into `docs/` after changes under `public/` land on `main`. A production build does not include drafts.
