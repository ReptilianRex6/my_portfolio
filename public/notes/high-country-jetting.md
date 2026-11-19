---
title: High Country Jetting
date: 2026-11-19
summary: A staging website for a Uintah Basin drain-cleaning business, with town pages and a photo admin, in client review.
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

A static multi-page site on Firebase Hosting: home, drain and sewer services, other property work, a recent-work gallery, and contact. The staging site has town pages for Vernal, Roosevelt, and Duchesne, and the service area runs from Fruitland to Jensen. The owner supplied a logo and photos. The site uses the photos they approved, as smaller WebP files, and leaves the original camera files out of what gets deployed.

The staging site is in client review. The public domain still serves the previous site, so this page links that domain and not the staging address.

The public pages do not link to an admin screen. The owner signs in with Google, posts a photo, and can delete it. The file goes to Cloud Storage and the record goes to Firestore. Upload and delete have been checked on staging.

"Write it for me" drafts a caption the owner can edit before a photo is public. The suggestion comes from Firebase AI Logic. App Check sits in front of the Firebase calls.

## Tools

Static HTML keeps the public pages simple to host. Firebase is there for the parts that change after launch: sign-in, photos, and caption suggestions. There is no separate CMS for the owner to learn.

## Outcome

Sign-in, posting a photo, deleting a photo, and caption suggestions work on the staging site. The town pages and the Fruitland-to-Jensen service area are on that staging site too.

What I learned: the useful version is the one the owner can update from a phone, on one bill, without me in the middle.
