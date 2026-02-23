# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static personal portfolio website for Nikhil Kaul, hosted at `www.nikhilkaul.me` via GitHub Pages. It uses no build system or JavaScript framework — just plain HTML, CSS, and a Jekyll theme config for GitHub Pages deployment.

## Deployment

Changes pushed to the `master` branch are automatically deployed by GitHub Pages. There is no build step to run locally. To preview locally, you can use Jekyll:

```bash
gem install jekyll bundler
jekyll serve
```

Then open `http://localhost:4000`.

## Structure

- `index.html` — Home page with skills/tech icons grid
- `about.html` — Bio page with photos
- `work.html` — Work experience and projects
- `recruiters.html` — Recruiter-facing page with resume/contact links
- `css/main.css` — All site styles (single stylesheet)
- `fonts/` — Custom technology icon font with its own `styles/technology-icons.css`
- `images/` — Photos, company logos, project screenshots, and resume PDF
- `_config.yml` — Jekyll config (only sets `theme: jekyll-theme-cayman`, which GitHub Pages uses)

## CSS Conventions

- Primary accent color: `rgb(201, 31, 31)` (red)
- Section IDs follow the pattern `page-section` (e.g., `#home-a`, `#work-a`, `#about-a`, `#contact-a`)
- Header IDs: `#header-home` (full-bleed hero style) vs `#header-inner` (compact, used on inner pages)
- Grid layouts use CSS classes like `.specials`, `.work-info`, `.project-info`, `.about-info`

## Icons

- FontAwesome (loaded via kit script in `<head>`) for brand/tech icons (`fab fa-*`, `fas fa-*`)
- Custom font in `fonts/styles/technology-icons.css` for icons not in FontAwesome (MySQL, MongoDB, SQL) using class `icon-*`

## Page Template Pattern

All pages share the same `<head>` block (same font, FontAwesome kit, `css/main.css`, and `fonts/styles/technology-icons.css`). The nav `<ul>` is repeated on every page with `class="current"` on the active link.
