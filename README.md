# my_portfolio

Ethan Bennett's portfolio site — static HTML/CSS/JS, deployed to Firebase Hosting via GitHub Actions.

## Structure

- `public/index.html` — the entire site (single file)
- `firebase.json` — Firebase Hosting config
- `.firebaserc` — Firebase project alias
- `.github/workflows/firebase-deploy.yml` — CI/CD: deploys to live on push to `main`, creates preview channels on PRs

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
