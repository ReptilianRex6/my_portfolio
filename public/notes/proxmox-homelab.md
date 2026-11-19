---
title: Proxmox homelab
date: 2026-11-19
summary: A Proxmox host and a NAS for files, media, and a few services I actually use. This note stays off the network map.
status: shipped
role: I design it, run it, and fix it when it breaks.
tools:
  - Proxmox
  - Linux
  - Docker
  - Jellyfin
  - Nextcloud
  - Tailscale
tags:
  - homelab
  - Linux
  - self-hosting
order: 3
draft: false
---

## The problem

I wanted one place for the services I use at home: files, media, name resolution, and a way to reach them when I am not there. A pile of one-off installs is easy to start and miserable to put back. The lab is where I practice the unglamorous part. Where does the data live, what does a service depend on, and how would I rebuild it?

## What I built

Two roles, and no map.

A Proxmox host runs the always-on services. A separate NAS holds the files and the media library. A portable laptop was the earlier server for that library.

Jellyfin serves the library. A personal cloud (Nextcloud) and file sync cover the files I want on more than one device. I run my own DNS resolver, a small homepage, and an uptime check so I notice when something is down. Remote access is Tailscale, not a set of ports forwarded on the router.

I am not publishing addresses, hostnames, or a topology diagram. The point of this note is the split between compute and storage, not a map of my house.

## Tools

Proxmox is the host because I want a line between a service and the machine under it. Docker is for the apps that are happier as containers. The NAS is for data I do not want trapped inside a container.

## Outcome

The lab is running and I use it.

What I learned: decide where the data lives before you add another container. Moving a media library later is the slow part.
