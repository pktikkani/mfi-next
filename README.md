# Meditate for India

The official website for **Meditate for India** — a free, global 24-hour immersion in Meditation, Pranayama, Asana, and Chanting organized by [The Mindful Initiative](https://www.themindfulinitiative.com).

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript 5**

## Features

- System-preference dark mode via `prefers-color-scheme` — automatically switches between light and dark themes
- Glassmorphism UI with backdrop-blur effects
- Animated page transitions and micro-interactions
- Fully responsive (mobile-first)
- Registration modal with multi-step flow (form → confirm → success)
- FAQ accordion
- Static generation for all pages

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, three pillars, movement section, speakers, join CTA |
| `/about-us` | About The Mindful Initiative |
| `/join-event` | Event registration with online join modal |
| `/faq` | Frequently asked questions |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── globals.css         # Design tokens, animations, dark mode
│   ├── page.tsx            # Home page
│   ├── about-us/page.tsx   # About page
│   ├── join-event/page.tsx # Join event page
│   └── faq/page.tsx        # FAQ page
├── components/
│   ├── Navbar.tsx           # Responsive navbar with glass effect
│   ├── Footer.tsx           # Desktop footer
│   └── RegistrationModal.tsx # Multi-step registration modal
public/
└── img/                     # All static images
```

## Design

- **Light mode**: Warm teal palette on soft off-white (#F4F8F8)
- **Dark mode**: Deep ocean tones (#0B1D22) with subtle primary glows
- **Fonts**: Playwrite IT Moderna (headings) + Open Sans (body)
- **Accent**: #1DB0CD (teal)

## Deploy

Deploy on [Vercel](https://vercel.com/new), [Netlify](https://www.netlify.com/), or any platform that supports Next.js.

## License

All rights reserved — The Mindful Initiative.
