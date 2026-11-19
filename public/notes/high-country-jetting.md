---
title: High Country Jetting
date: 2026-11-19
summary: A new website for a Uintah Basin drain-cleaning business. The preview is in client review. The live domain still serves the old site.
status: prototype
role: Freelance developer. I designed and built the site and the photo admin.
tools:
  - Static HTML
  - Firebase Hosting
  - Google sign-in
  - Cloud Firestore
  - Cloud Storage
  - Firebase AI Logic
  - App Check
tags:
  - client work
  - Firebase
  - local business
order: 1
draft: false
repo: https://github.com/ReptilianRex6/high-country-jetting
repoLabel: ReptilianRex6/high-country-jetting
link: https://www.highcountryjetting.com/
linkLabel: Current public site
linkText: highcountryjetting.com
---

## The problem

High Country Jetting cleans drains and sewers in Utah's Uintah Basin. The business already has a public website, and that domain is still the one visitors get. The owner needed a clearer site: what the company does, where it works, and a way to put real job photos up without asking a developer every time.

The owner is not a web developer. Anything I add has to be obvious on a phone, and the ongoing hosting bill has to be one the business can see and pay.

## What I built

A static multi-page site: home, drain and sewer services, other property work, a recent-work gallery, and contact. The copy names Uintah County and Duchesne County as the service area. The owner supplied a logo and photos. The site uses the photos they approved, as smaller WebP files, and leaves the original camera files out of what gets deployed.

The preview runs on Firebase Hosting. It is in client review. It is not the live domain, so I am not linking the preview from this page.

The public pages do not link to an admin screen. The owner signs in with Google, posts a photo, and can delete it. The file goes to Cloud Storage and the record goes to Firestore. Upload and delete have been checked on the preview.

"Write it for me" drafts a caption the owner can edit before a photo is public. The suggestion comes from Firebase AI Logic. App Check sits in front of the Firebase calls.

## Tools

Static HTML keeps the public pages simple to host. Firebase is there for the parts that have to change after launch: sign-in, photos, and caption suggestions. There is no separate CMS for the owner to learn.

## Outcome

The preview is in front of the client. Sign-in, posting a photo, deleting a photo, and caption suggestions work on that preview. I am not calling the project shipped. The live domain has not moved, local search is still an open job, and an Instagram feed is waiting on access to the account.

What I learned: the useful version is the one the owner can update from a phone, on one bill, without me in the middle.

## Still open

- Per-town pages. The site talks about the two counties. It does not yet have a page for each town people search for. That work is not done.
- Search visibility. The live domain is still the old site, so this redesign is not what a search engine is ranking.
- The Instagram feed, once the account is available.
- Client approval, then the hosting handoff. Ongoing hosting cost stays with the client.

<!-- TODO: Confirm the client is comfortable being named here, with a link to the current public site. Add a screenshot of the public marketing pages if you want one. Do not screenshot the admin screen. Add the preview or the new live URL only when you want that address public. -->
