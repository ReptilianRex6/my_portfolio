---
title: Aisthetic Studio
date: 2026-11-19
summary: Company work on a generative image and video product. One workflow in front of several providers, including jobs that finish after the person has moved on.
status: shipped
role: AI developer at Lava Studios. Mostly services and cloud, not the whole product.
tools:
  - Python
  - Google Cloud Run
  - Firebase
  - Docker
  - Stripe
tags:
  - Python
  - Cloud Run
  - generative AI
order: 2
draft: true
---

## The problem

Image and video providers do not share inputs or response shapes. Aisthetic Studio needs a generation flow that feels like one product, including requests that finish later, after the person is no longer watching the screen.

## What I built

I work on the service side of that flow at Lava Studios. Python services on Cloud Run talk to the providers. Firebase holds the application side and the generation history. When a provider finishes, a callback records the result so the product can show it.

The product takes payment. I have worked on the Stripe side of that lifecycle, so a subscription is more than the moment someone checks out. The system has to cope with the states that follow.

This note stays at that level. I am not describing internal routes, prompts, or how the infrastructure is laid out. It is company work.

## Tools

Python is the service language. Cloud Run is where those services run. Firebase is the app data and sign-in side. Docker is how the services are built and deployed. Stripe is the billing integration. The product calls more than one image and video provider. Integration details stay off this page.

## Outcome

The studio is product work I do: one workflow, callbacks when a provider finishes, and billing that covers more than the checkout moment.

What I learned: the hard part is the jobs that finish later. The screen has to show progress, and the system has to record the result when the person has already moved on.
