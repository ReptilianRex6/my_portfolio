---
title: Aisthetic Studio
date: 2026-11-11
summary: A case study in building a multi-provider workflow for AI image and video generation.
tags: [Python, Cloud Run, Generative AI]
draft: true
---

## The problem

Image and video providers each have their own inputs and response formats. In Aisthetic Studio, the engineering challenge was giving users a consistent generation workflow across providers while keeping track of work that finishes asynchronously.

## Following a generation request

The project brought provider integrations together behind a shared application workflow. Python services on Cloud Run handled integrations and asynchronous callbacks, with Firebase supporting the application and generation history. The case study will follow a single request from submission to the result the user sees.

## What I want to show

- One provider integration and where it needed different handling.
- How the user sees progress and how the system records the final result.
- The piece of the workflow I owned and one decision I would make differently today.
