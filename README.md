# Peerawat Nakinchat · Portfolio

An editorial, bilingual developer portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4. The interface uses an ink/paper/coral visual system, typed project content, semantic HTML, lightweight scroll reveals, and a print-ready résumé page. Styling uses Tailwind utilities; `globals.css` only imports Tailwind.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. `/` redirects to `/en`; Thai is at `/th`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Before publishing

1. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin. Canonical URLs, sitemap, and structured data use it. See `.env.example`.
2. Fill in `email` and `linkedin` in `src/data/profile.ts` if those should be public. The GitHub profile is derived from this repository's remote. No private email address is published.
3. If there is a PDF résumé, add it under `public/` and add its path to `src/data/profile.ts`. The current résumé route is complete and can be printed or saved as PDF in the browser.
4. Review the individual contribution and technology wording in `src/data/projects.ts`. The case studies distinguish known system features from personal work where the supplied brief does not establish individual ownership. Replace those limited descriptions with verified details and approved screenshots when available.

## Content and imagery

All six projects live in `src/data/projects.ts`; English and Thai content share one typed model. The HOP Chafe, NICONICO, and ISO IT Support visuals are explicitly labeled conceptual diagrams and show no private data. Product imagery for Skin MD Thailand and Alangkan Thai comes from their publicly accessible sites:

- [Skin MD Thailand](https://www.skinmdthailand.com/en/): `public/images/skinmd-hero.webp`
- [Alangkan Thai](https://www.alangkanthai.net/): `public/images/alangkan-hero.png`

## Structure

- `src/app/[lang]`: bilingual homepage, project index, case studies, résumé
- `src/components`: navigation, footer, project index, visuals, and small interaction primitives
- `src/data`: project model and profile/experience content
- `src/lib/i18n.ts`: language copy and helpers
- `src/app/globals.css`: Tailwind import only

Motion uses Tailwind transition utilities and one IntersectionObserver primitive. Touch layouts do not depend on hover; reduced motion is respected. No animation library is required.
