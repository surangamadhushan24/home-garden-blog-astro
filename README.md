# Home & Garden Blog

A modern Astro-powered blog for home improvement, gardening, and lifestyle content.

## Overview

This project is a content-driven website built with Astro, Tailwind CSS, and markdown-based blog posts. It includes a clean layout, category pages, blog post routing, and SEO-friendly features such as a sitemap.

## Features

- Astro site with static page generation
- Tailwind CSS styling via `@astrojs/tailwind`
- Structured blog content in `src/content/blog`
- Dynamic category and blog post pages
- Sitemap support via `@astrojs/sitemap`
- Preview and build-ready configuration

## Project Structure

- `src/pages/` — site pages and routing
- `src/layouts/` — page layout templates
- `src/components/` — reusable UI and section components
- `src/content/blog/` — markdown blog posts
- `src/styles/global.css` — global styling
- `astro.config.mjs` — Astro configuration and integrations

## Requirements

- Node.js 22.12.0 or newer

## Install

```bash
npm install
```

## Development

Start the local development server:

```bash
npm run dev
```

Open the local URL shown in the terminal to preview the site.

## Build

Generate the production-ready site:

```bash
npm run build
```

Preview the built site locally:

```bash
npm run preview
```



