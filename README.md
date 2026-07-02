

# Hexagon Travels — v3

<img src='https://github.com/dotrwt/HexagonTravels-v3/blob/main/assets/logo.png' alt='logo' height='200px'>



Marketing website for **Hexagon Travels**, a group and corporate (MICE) travel agency based in Ahmedabad, India, specializing in custom group tours, school excursions, honeymoons, and corporate retreats.

Live: [hexagontravels.com](https://hexagontravels.com)
Developed by [dotrwt](https://dotrwt.in)

## Preview

<img src='https://github.com/dotrwt/HexagonTravels-v3/blob/main/assets/UI.png' alt='UI'>

## Overview

A fully static, no-build single-page site plus a secondary destinations/packages page. Sections include:

- **Hero** — full-bleed image with brand headline
- **Trust strip** — infinite-scroll marquee of top destinations served
- **Experiential Journeys collage** — absolute-positioned glassmorphic image cards on desktop, responsive grid fallback on mobile/tablet
- **Manifesto** — brand philosophy with a glassmorphic stats strip (25+ destinations, 1,800+ travelers, 100% custom itineraries, 24/7 support)
- **Two feature panels** — "Sourced Packages" UI mock and a "Hexagon Planner" AI-assistant style UI mock
- **Destinations tabs** — Group Tours / Corporate (MICE) / Family Trips / Honeymoons, with a link out to the full destinations page
- **Testimonials carousel** — JS-driven crossfade with prev/next controls and dot indicators
- **Latest Travel Guides** — curated external article links
- **Contact CTA** — WhatsApp and direct-call buttons
- **Footer** — contact details and structured `TravelAgency` + `BreadcrumbList` JSON-LD for SEO

## Tech Stack

- **HTML5** + **vanilla JavaScript** (`script.js`) — no framework, no build step
- **Tailwind CSS** via CDN (`forms`, `container-queries` plugins)
- **Google Fonts** — Poppins (display/body) + Material Symbols Outlined (icons)
- **Custom CSS** (`style.css`) for the marquee animation and other bespoke styling on top of Tailwind
- **JSON-LD** structured data (`TravelAgency`, `BreadcrumbList`) for SEO
- `sitemap.xml` + `robots.txt` for crawlability

## Project Structure

```
HexagonTravels-v3/
├── assets/            # images, logos, Open Graph image
├── destinations/      # full destination/package listing page
├── favicon/           # favicon set + web manifest
├── index.html         # landing page
├── script.js          # nav, marquee, destination tabs, testimonial carousel logic
├── style.css          # custom styles/animations layered on Tailwind
├── robots.txt
└── sitemap.xml
```

## Running Locally

No build step required — just serve the folder statically:

```bash
git clone https://github.com/dotrwt/HexagonTravels-v3.git
cd HexagonTravels-v3
npx serve .
# or
python -m http.server 8000
```

Then open the local server URL in your browser.

## Deployment

Deploy the repo root as-is to any static host (Vercel, Netlify, GitHub Pages, etc.) — no build/CI step needed.

## Contact

- WhatsApp / Call: +91 9998888071
- Email: travelshexagon@gmail.com
- Address: 401 Phoenix by D&C, Ahmedabad, Gujarat 380009

---

© 2026 Hexagon Travels. All rights reserved.
