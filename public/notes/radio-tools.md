---
title: Radio tools
date: 2026-11-19
summary: A one-page HF band outlook for my callsign, and a written design for a Duchesne County emergency network.
status: prototype
role: General-class operator, KM7CPJ. I built the page and wrote the design.
tools:
  - HTML and CSS
  - Public solar and propagation data
  - AREDN and Meshtastic planning notes
tags:
  - amateur radio
  - HTML
  - emergency communications
order: 4
draft: false
repo: https://github.com/ReptilianRex6/QRZ-Webpage
repoLabel: ReptilianRex6/QRZ-Webpage
link: https://github.com/ReptilianRex6/Duchesne-County-ARES-Map
linkLabel: Design repo
linkText: Duchesne-County-ARES-Map
---

## The problem

I want to know if the HF bands are worth sitting down for before I turn the radio on. Public propagation sites already exist. I wanted one page with the numbers I actually look at: solar flux, the K-index, and a rough day and night read for 80 through 10 meters.

Duchesne County ARES has a different problem. Emergency messages need a path when the public internet does not. I wrote that as a design other operators can read, separate from the band page.

## What I built

The HF outlook is a single HTML file in [QRZ-Webpage](https://github.com/ReptilianRex6/QRZ-Webpage). It reads a public propagation feed and draws the bands. If the feed does not answer, the page says the data is unavailable instead of inventing a condition. The ratings are broad estimates. The page says so. They are not a promise that a contact will go through.

The [Duchesne County ARES repo](https://github.com/ReptilianRex6/Duchesne-County-ARES-Map) is the written design. It is layered: higher-capacity radio links for IP, a low-bandwidth mesh for text, optional internet backhaul, and small Linux computers at the edge. The documents are a design, not permission to climb a tower or turn a site on.

## Tools

The HF page is one file so it can sit next to a callsign biography without a build step. The ARES work is documents. The design comes before any hardware.

## Outcome

The HF page shows public data, or it says when the feed does not answer. The ARES repo is the design I can hand to other operators.

The station is separate from these pages. I run a Yaesu FT-991A, and I spend time on portable operating, antennas, and emergency communications. That lives on the [amateur radio page](../../radio.html).
