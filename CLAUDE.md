# Meditate for India — Next.js

## Architecture

- Next.js 16 App Router with Tailwind v4
- All pages are client components (use `"use client"`) for interactivity
- Dark mode uses CSS custom properties toggled by `prefers-color-scheme` media query — no class-based toggling
- Design tokens are in `src/app/globals.css` under `:root` and the dark media query

## Conventions

- Shared components live in `src/components/`
- Images are in `public/img/` — reference as `/img/filename`
- All text content and images are from the original Python/FastHTML version and should be preserved as-is
- Colors use semantic Tailwind tokens: `text-txt`, `bg-bg`, `text-primary`, etc.
- Font classes: `font-heading` (Playwrite IT Moderna), `font-body` (Open Sans)

## Key Colors

- Primary: `--c-primary` (#1DB0CD light / #2EC4DE dark)
- Text: `--c-text` (#004552 light / #D4EEF3 dark)
- Background: `--c-bg` (#F4F8F8 light / #0B1D22 dark)
