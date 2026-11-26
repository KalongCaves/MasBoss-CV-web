# Tierra Mesa — Restaurant Website

A responsive Next.js App Router landing page for Tierra Mesa, a seasonal Mexican-kitchen concept. The site is inspired by the general editorial feel of the reference, with its own name, copy, layout, color palette, menu, and imagery.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

Import this project into Vercel (or run `npx vercel` from this directory). Vercel detects Next.js automatically. Set `NEXT_PUBLIC_SITE_URL` to the deployed origin before production, for example `https://your-domain.com`.

## Before publishing

This is a ready-to-build demo, not a claim that a real restaurant operates at this location. Update `src/data/restaurant.ts` with the real restaurant name, address, coordinates, hours, contact details, menu and prices. The current address is a sample location in Chicago; map links are generated from it. Replace the `.example` email and the sample reservation-by-email links with a real booking URL or inbox. Review the food, parking and dietary copy against your actual policies.

## Images

The supplied image files live in `public/images/` and are served locally. Replace them with your own licensed photography as needed. They were downloaded from Unsplash for this demo.

## Project structure

- `src/app/page.tsx` — page composition
- `src/app/tierra.css` — responsive visual system and page styling
- `src/app/layout.tsx` — document metadata and root layout
- `src/data/restaurant.ts` — menu, FAQ, location and restaurant copy
- `src/components/` — page sections
- `public/images/` — local photo assets

