---
title: Radio tools
date: 2026-11-19
summary: A one-page HF band outlook for my callsign, and a planning repo for a Duchesne County emergency network that is not on the air.
status: prototype
role: General-class operator, KM7CPJ. I built the page and wrote the plan.
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
linkLabel: Planning repo
linkText: Duchesne-County-ARES-Map
---

## The problem

I want to know if the HF bands are worth sitting down for before I turn the radio on. Public propagation sites already exist. I wanted one page with the numbers I actually look at: solar flux, the K-index, and a rough day and night read for 80 through 10 meters.

Duchesne County ARES has a different problem. Emergency messages still need a path when the public internet does not. That is a network to design with other people, not a page to publish, and it is not built.

## What I built

The HF outlook is a single HTML file in [QRZ-Webpage](https://github.com/ReptilianRex6/QRZ-Webpage). It reads a public propagation feed and draws the bands. If the feed does not answer, the page says the data is unavailable instead of inventing a condition. The ratings are broad estimates. The page says so. They are not a promise that a contact will go through.

The [Duchesne County ARES repo](https://github.com/ReptilianRex6/Duchesne-County-ARES-Map) is a planning workspace. The idea is layered: higher-capacity radio links for IP, a low-bandwidth mesh for text when that is all you have, optional internet backhaul, and small Linux computers at the edge. The repo's own status is discovery and coordination. Nothing in it should be read as an approved site, an installation, or permission to climb a tower.

## Tools

The HF page is one file so it can sit next to a callsign biography without a build step. The ARES work is documents on purpose. The plan comes before any hardware.

## Outcome

The HF page does what it was written to do: show public data, or fail in the open. I do not have a visitor count, and I am not claiming the page is embedded on my QRZ profile.

The ARES network is a plan. Nothing in this note is an installed system.

The station is separate from these pages. I run a Yaesu FT-991A, and I spend time on portable operating, antennas, and emergency communications. That lives on the [amateur radio page](../../radio.html).

## Still open

<!-- TODO: Add the live URL if the HF page is published on QRZ or anywhere else. Before adding a map, decide which parts of the ARES plan are yours to share. Leave out exact sites, access details, and private contacts. -->
