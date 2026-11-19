---
title: A shared notebook for AI assistants
date: 2026-11-19
summary: A private notes repo that Claude, ChatGPT, Grok, and Cursor share, with a nightly sync and a site-monitoring bot.
status: shipped
role: I set the structure and keep the files current. The assistants read them and propose edits.
tools:
  - Markdown
  - A private Git repository
  - A nightly repo sync
  - A site-monitoring bot
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

A private repository of plain Markdown. One file per project. Work and personal projects stay in different folders. Every file has the same shape: what it is, the current status, decisions, open questions, and a short changelog.

A separate page describes how I like to work. A short instruction file tells an assistant how to read the repo. The rule I care about is at the end of a session: update the project file. Do not keep a second history in the chat. Do not put secrets, passwords, or a client's private contact details in the repo.

The assistants I point at it are Claude, ChatGPT, Grok, and Cursor. They do not share a memory. They share a file.

A nightly job syncs the repository. A bot monitors the site.

## Tools

Markdown is the format because every tool can read it and I can edit it myself. Git is the history. The nightly job keeps the copies in step, and the bot watches the site. There is no app in front of the files.

## Outcome

I use the repo. It is the brief I attach when I start work on a project. The nightly sync and the monitoring bot run.

What I learned: a shared file only works if it stays short. A changelog line says what changed and what I decided. It is not a second copy of the project.
