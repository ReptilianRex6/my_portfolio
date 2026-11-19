---
title: A shared notebook for AI assistants
date: 2026-11-19
summary: A private notes repo so Claude, ChatGPT, Grok, and Cursor start from the same project file instead of each chat inventing its own memory.
status: prototype
role: I set the structure and keep the files current. The assistants read them and propose edits.
tools:
  - Markdown
  - A private Git repository
  - Claude, ChatGPT, Grok, and Cursor
tags:
  - AI assistants
  - notes
  - workflow
order: 5
draft: false
---

## The problem

I work nights as a CNC machinist, and the hours I have for software are short and split up. I also use more than one AI assistant. Left alone, each chat remembers a different version of a project. I got tired of re-explaining status, and of an assistant changing something I had not asked about.

## What I built

A private repository of plain Markdown. One file per project. Work and personal projects stay in different folders. Every file has the same shape: what it is, the current status, decisions, open questions, next steps, and a short changelog.

A separate page describes how I like to work. A short instruction file tells an assistant how to read the repo. The rule I care about is at the end of a session: update the project file. Do not keep a second history in the chat. Do not put secrets, passwords, or a client's private contact details in the repo.

The assistants I point at it are Claude, ChatGPT, Grok, and Cursor. They do not share a memory. They share a file.

## Tools

Git is the sync. Markdown is the format because every tool can read it and I can edit it myself. There is no app in front of the files.

## Outcome

I use the repo. It is the brief I attach when I start work on a project. That part is real.

Two things I have not built: a job that syncs the files for me, and a bot that watches them and tells me when one has gone stale. The update is still a habit. It happens when I remember to do it at the end of a session, and it gets skipped when I do not. I would rather say that than imply a team of monitoring bots is running.

What I learned: a shared file only works if it stays short. A changelog line is three things. What changed, what I decided, and what is next. It is not a second copy of the project.

## Still open

<!-- TODO: If a sync job or a monitoring bot exists outside this notes repo, name where it runs and what it is allowed to change. Until then, this page should keep saying they are not built. Do not link the private repo from this public site. -->
