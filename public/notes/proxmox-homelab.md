---
title: Proxmox homelab
date: 2026-11-11
summary: A tour of the homelab through the decisions that make it easier to operate and recover.
tags: [Proxmox, Linux, Self-hosting]
draft: true
---

## What the lab is for

My homelab is a place to run useful services and learn what it takes to keep them running. The portfolio already covers the Docker-based media stack. This note will zoom out to the Proxmox host and show how the workloads fit together.

## Start with one workload

I'll use one service to explain how I chose where it runs, where its data lives, and what it depends on. A topology diagram can make that clear before getting into configuration details.

## What I want to document

- Which workloads run in VMs or containers and why.
- What gets backed up, how I would restore a service, and what I have verified with a test restore.
- Where Nextcloud, Caddy, and Technitium DNS fit, with space for follow-up notes on each.
