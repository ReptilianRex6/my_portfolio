# my_portfolio

Ethan Bennett's portfolio site — static HTML/CSS/JS, deployed to Firebase Hosting via GitHub Actions.

It can also be deployed with GitHub Pages using the docs folder.

## Structure

- `public/` — primary source files while developing
- `docs/` — GitHub Pages publish folder (copy of `public/`)
- `firebase.json` — Firebase Hosting config
- `.firebaserc` — Firebase project alias
- `.github/workflows/firebase-deploy.yml` — CI/CD: deploys to live on push to `main`, creates preview channels on PRs

## GitHub Pages setup

1. In the repo, open Settings > Pages.
2. Under Build and deployment, choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
3. Save. GitHub will publish from docs/index.html.

Your site URL will be:
- https://reptilianrex6.github.io/my_portfolio/

## Keep docs in sync after edits

This repo now includes [sync-docs workflow](.github/workflows/sync-docs.yml) that automatically copies `public/` to `docs/` on pushes to `main`.

If you want to sync locally before pushing, you can still run:

```powershell
Copy-Item -Path "public\*" -Destination "docs" -Recurse -Force
```

Optional: add a script or workflow later to automate this copy.

## One-time setup

1. Create a Firebase project at https://console.firebase.google.com and enable Hosting.
2. Replace `YOUR_FIREBASE_PROJECT_ID` in `.firebaserc` and `.github/workflows/firebase-deploy.yml` with your project ID.
3. Create a service account key for CI:
   ```
   firebase init hosting:github
   ```
   (easiest — it creates the `FIREBASE_SERVICE_ACCOUNT` secret in your repo automatically)

   Or manually: in GCP Console create a service account with the **Firebase Hosting Admin** role, download its JSON key, and add it as a GitHub repo secret named `FIREBASE_SERVICE_ACCOUNT`.
4. Push to `main` — the workflow deploys automatically.

## Local preview

```
npx firebase-tools emulators:start --only hosting
```

or just open `public/index.html` in a browser.
