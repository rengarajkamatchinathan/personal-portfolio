# Project conventions — Rengaraj K portfolio

Personal portfolio. Next.js 16 (App Router, RSC), React 19, Tailwind v4, TypeScript.

## Data lives in `/data`
All component content/data lives in the root `/data` folder — one file per component
(`data/hero.ts`, `data/about.ts`, `data/projects.ts`, `data/experience.ts`,
`data/capabilities.ts`, `data/certifications.ts`, `data/education.ts`). Shared identity
(name, brand, role, location, email, socials, siteUrl) lives in **`data/profile.ts`** as the
single source of truth. Components import via `@/data/...` — **never hardcode** names, copy,
links, or lists inline. Blog posts are in `lib/blog-data.tsx`.

## "Last sync" badge is automatic — do NOT bump it by hand
The header badge (`components/last-sync.tsx`) shows "last sync 2h ago / 5 days ago" computed
in the visitor's browser from **`NEXT_PUBLIC_BUILD_TIME`**, which is captured at build time in
`next.config.mjs` (`new Date().toISOString()`). It updates itself on **every Vercel deploy**
(and every local `next dev` start), and the relative label keeps counting up client-side
without a redeploy. There is no manual timestamp to edit — leave `next.config.mjs` and
`last-sync.tsx` as the mechanism; don't add a hardcoded date.

## Homepage section order
`app/page.tsx`: Hero → About → Projects → Experience → Skills → Certifications → Blog →
Education → Footer. Each section is a component in `components/` reading from `/data`.

## Style
Match existing patterns: `SectionEyebrow` (`~/path` eyebrows), glass cards
(`rounded-xl border bg-card/40 glass hover-lift`), `animate-fade-in-up` entrances, the teal
`primary` token, mono labels. Keep `bg-gradient-to-*` classes as-is (codebase convention;
ignore the v4 `bg-linear-*` lint hint).
