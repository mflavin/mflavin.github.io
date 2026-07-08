# Portfolio UI Redesign — Refined Minimal

**Date:** 2026-07-07
**Direction:** Refined Minimal (keep single-column structure, elevate polish)
**Accent:** Teal
**Project cards:** Detail cards (screenshot + blurb + tech tags)

## Goal

Make the portfolio look more professional and modern without restructuring the site. Same sections, same content, same routing — better visual design.

## Scope

Files changed (no new pages, no content changes):

- `src/styles/main.css` — add teal accent token, section header/pill component classes
- `src/layouts/Layout.astro` — widen container, section rhythm
- `src/components/ProfileSection.astro` — larger avatar/name, teal title, icon links
- `src/components/ProjectsSection.astro` — 2-column detail cards
- `src/components/SkillsSection.astro` + `SkillsList.astro` — pill badges
- `src/components/WorkExperienceSection.astro` — refined timeline
- `src/components/EducationSection.astro` — match timeline styling
- `src/components/Footer.astro` — top border, accent links
- `src/pages/[projectId].astro` — restyle to match (tags, buttons, headers)

Out of scope: content edits, new sections, layout restructuring (bento/sidebar), light/dark default change (dark stays default).

## Design decisions

### 1. Design tokens (`main.css`)

- Add a brand accent variable alongside existing shadcn-style tokens:
  - `--brand: oklch teal` — teal-400 (`#2dd4bf`-ish) in dark mode, teal-600 in light mode for contrast.
  - Expose via `@theme inline` as `--color-brand` so `text-brand`, `border-brand`, `bg-brand/10` utilities work.
- Do not restructure existing tokens; additive only.

### 2. Layout

- `max-w-3xl` → `max-w-4xl` on body container so the 2-column project grid breathes.
- Section spacing `gap-y-10 sm:gap-y-14` → `gap-y-16 sm:gap-y-20`.

### 3. Profile section

- Avatar 64px → 80px with subtle teal ring (`ring-2 ring-brand/30` style).
- Name `text-2xl` → `text-3xl sm:text-4xl`, tracking-tight.
- Job title rendered in teal.
- Row of small bordered icon-link buttons under bio: GitHub + email (from `siteConfig`), with hover accent border.

### 4. Projects section

- Grid: `grid-cols-1 sm:grid-cols-2` (replaces 2/3-col thumbnail grid).
- Card anatomy: 16:9 screenshot on top (object-top crop), body with title, one-line `description`, and tech tag pills from `technologies` (already present in `projects.ts` — no data work).
- Card styling: `bg-card`, 1px border, `rounded-xl`, overflow-hidden.
- Hover: teal border, slight lift (`-translate-y-0.5`), arrow indicator next to title. Respect `prefers-reduced-motion` (already handled globally).
- Keep `transition:name={project.id}` view transitions to detail pages.
- Tech pill style: small text, teal tint background (`bg-brand/10`), teal border (`border-brand/25`), rounded-full. Cap visible tags if they overflow one row is acceptable; no truncation logic required.

### 5. Skills section

- Replace text lists with the same pill badge style as project tech tags (neutral variant: `bg-secondary`, `border-border`), grouped under small uppercase category labels (`.label` style: text-xs, uppercase, tracking-wide, muted).
- Layout: category label above pills (stacked), not side-by-side dl columns.

### 6. Work experience & education

- Keep vertical timeline structure.
- Company/school logos in 40px bordered rounded-lg squares (`bg-card`, border).
- Timeline line: `bg-border`; timeline connects logo squares.
- Duration displayed as a small badge (text-xs, muted, `bg-secondary` rounded).
- Text hierarchy per entry: line 1 `Position` (text-sm, semibold, foreground); line 2 `Company` (text-sm, teal); line 3 duration badge; then description + responsibilities as today.
- Education section uses identical styling for consistency.

### 7. Section headers

- Shared pattern across all sections: small teal kicker (short dash/rule or `##`-style mark) + `text-xl font-semibold tracking-tight` title.
- Implemented as a component class or a tiny `SectionHeader.astro` component if repetition warrants it.

### 8. Footer

- Top border (`border-t border-border`), padding increase, links get teal hover.

### 9. Project detail pages (`[projectId].astro`)

- Restyle to match: section-header pattern, teal tech pills, bordered buttons (Live/GitHub) using the `.btn` style with teal hover accent, feature list styling consistent with home page typography.

## Accessibility & performance

- Teal on dark background must meet WCAG AA for text (teal-400 on zinc-900 passes; verify light mode teal-600 on white).
- Keep existing: skip link, focus-visible styles, reduced-motion handling, lazy image loading, Astro Fonts API.
- No new JS; all changes are markup + CSS.

## Testing

- Existing Playwright e2e (`tests/e2e/ProfileSection.test.ts`) must still pass; update selectors if markup changes break them.
- Manual check: light + dark mode, mobile (grid collapse to 1 col), keyboard focus states, view transitions to project pages.
