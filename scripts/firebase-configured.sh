#!/usr/bin/env bash
# Prints GitHub Actions outputs. Deploy only when a real project id and a
# service account are both present. Does not print the service account.
set -euo pipefail

project=$(node -p "JSON.parse(require('fs').readFileSync('.firebaserc','utf8')).projects.default")

if [ "$project" = "YOUR_FIREBASE_PROJECT_ID" ] || [ -z "${FIREBASE_SERVICE_ACCOUNT:-}" ]; then
  echo "configured=false" >> "$GITHUB_OUTPUT"
  echo "Firebase Hosting is not configured. The site build succeeded."
  echo "Replace YOUR_FIREBASE_PROJECT_ID in .firebaserc and set the FIREBASE_SERVICE_ACCOUNT secret to deploy."
  exit 0
fi

echo "configured=true" >> "$GITHUB_OUTPUT"
echo "project_id=$project" >> "$GITHUB_OUTPUT"
echo "Firebase project $project is configured. Deploying."
