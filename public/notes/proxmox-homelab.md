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

A Proxmox host runs the always-on services. A separate NAS holds the files and the media library. Media that used to live on a portable laptop is moving onto the NAS. The laptop was a useful experiment. The NAS is where I want that library to stay.

Jellyfin serves the library. A personal cloud (Nextcloud) and file sync cover the files I want on more than one device. I run my own DNS resolver, a small homepage, and an uptime check so I notice when something is down. Remote access is Tailscale, not a set of ports forwarded on the router.

I am not publishing addresses, hostnames, or a topology diagram. The point of this note is the split between compute and storage, not a map of my house.

## Tools

Proxmox is the host because I want a line between a service and the machine under it. Docker is for the apps that are happier as containers. The NAS is for data I do not want trapped inside a container.

## Outcome

The lab is running and I use it. It is not a finished build. A single reverse proxy in front of the services is still a plan. So is an offsite backup. I have not written up a restore I have actually tested, so I will not claim I can rebuild the whole thing from scratch.

What I learned: decide where the data lives before you add another container. Moving a media library later is the slow part.

## Still open

- One front door for the services, instead of remembering how each one is reached.
- An offsite backup, and a restore I have tried.
- Follow-up notes on DNS and the personal cloud, still without a network map.

<!-- TODO: If you add a diagram, draw roles only: host, storage, remote access. No addresses, hostnames, or interface names. -->
