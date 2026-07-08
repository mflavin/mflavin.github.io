# Portfolio UI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the portfolio to the "Refined Minimal" design — teal accent, detail project cards, pill badges, refined timeline — without changing content or routing.

**Architecture:** Astro 5 static site, Tailwind CSS 4 (CSS-first config in `src/styles/main.css` with shadcn-style CSS variables). All changes are markup + CSS in existing components; one new tiny component (`SectionHeader.astro`). No new JS, no data changes (`projects.ts` already has `description` + `technologies`).

**Tech Stack:** Astro 5, Tailwind CSS 4, @lucide/astro icons, Playwright e2e.

**Spec:** `docs/superpowers/specs/2026-07-07-portfolio-ui-redesign-design.md`

**Verification model:** This is a pure styling project — there is no unit-testable logic, so TDD does not apply per-task. Each task is verified by `npm run build` (catches Astro/TS/template errors) and the final task updates + runs the Playwright e2e suite against the new markup. Visual QA happens at the end with `npm run dev`.

**Note:** `.gitignore` has an uncommitted change (adds `.superpowers/`). Commit it as part of Task 1.

---

### Task 1: Add teal brand token and pill component classes

**Files:**
- Modify: `src/styles/main.css`
- Modify: `.gitignore` (already changed, just commit it)

- [ ] **Step 1: Add `--brand` variable to both themes**

In `src/styles/main.css`, inside the `:root { ... }` block (after `--input: oklch(0.92 0.004 286.32);`, before `--radius`), add:

```css
  --brand: oklch(0.6 0.118 184.704); /* teal-600 */
```

Inside the `:root.dark { ... }` block (after `--input: oklch(1 0 0 / 15%);`, before `--radius`), add:

```css
  --brand: oklch(0.777 0.152 181.912); /* teal-400 */
```

- [ ] **Step 2: Expose the token to Tailwind**

In the `@theme inline { ... }` block, after `--color-input: var(--input);`, add:

```css
  --color-brand: var(--brand);
```

- [ ] **Step 3: Add pill component classes**

In the `@layer components { ... }` block, after the `.btn-rounded` rule, add:

```css
  .pill {
    @apply inline-flex items-center gap-x-1.5 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground;
  }

  .pill-brand {
    @apply border-brand/25 bg-brand/10 text-brand;
  }
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 5: Commit**

```bash
git add src/styles/main.css .gitignore
git commit -m "Add teal brand token and pill component classes"
```

---

### Task 2: Create SectionHeader component

**Files:**
- Create: `src/components/SectionHeader.astro`

- [ ] **Step 1: Create the component**

Create `src/components/SectionHeader.astro`:

```astro
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---

<h2
  class="mb-6 flex items-center gap-x-3 text-xl font-semibold tracking-tight text-foreground"
>
  <span class="h-px w-6 bg-brand" aria-hidden="true"></span>
  {title}
</h2>
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build completes with no errors (component not yet used, this just catches syntax issues).

- [ ] **Step 3: Commit**

```bash
git add src/components/SectionHeader.astro
git commit -m "Add SectionHeader component with teal kicker"
```

---

### Task 3: Widen layout and increase section rhythm

**Files:**
- Modify: `src/layouts/Layout.astro:19-31`

- [ ] **Step 1: Update body width and main spacing**

In `src/layouts/Layout.astro`, change:

```astro
  <body class="max-w-3xl w-full mx-auto antialiased">
```

to:

```astro
  <body class="max-w-4xl w-full mx-auto antialiased">
```

and change:

```astro
    <main
      id="main-content"
      class="pt-10 md:pt-16 px-4 sm:px-6 lg:px-8 flex flex-col gap-y-10 sm:gap-y-14"
    >
```

to:

```astro
    <main
      id="main-content"
      class="pt-10 md:pt-16 px-4 sm:px-6 lg:px-8 flex flex-col gap-y-16 sm:gap-y-20"
    >
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "Widen layout to max-w-4xl and increase section spacing"
```

---

### Task 4: Restyle ProfileSection

**Files:**
- Modify: `src/components/ProfileSection.astro` (full rewrite of template)

- [ ] **Step 1: Rewrite the component**

Replace the entire contents of `src/components/ProfileSection.astro` with:

```astro
---
import { Image } from "astro:assets";
import { Mail } from "@lucide/astro";
import { siteConfig } from "@/data/siteConfig";
import profileImage from "@/images/profile_image.png";
import GithubSvg from "public/images/github.svg";
---

<div>
  <div class="flex items-center gap-x-4">
    <div>
      <Image
        alt="mflavin"
        loading="eager"
        fetchpriority="high"
        width="80"
        height="80"
        class="rounded-full ring-2 ring-brand/30 ring-offset-2 ring-offset-background"
        src={profileImage}
      />
    </div>

    <div>
      <h1
        class="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground"
      >
        Matt Flavin
      </h1>
      <p class="mt-1 text-sm sm:text-base font-medium text-brand">
        Full Stack Web Developer
      </p>
    </div>
  </div>

  <p class="mt-8 text-base leading-relaxed text-muted-foreground text-pretty">
    I'm a passionate full stack web developer with a focus on building
    accessible, performant, and user-friendly web applications. I love exploring
    new technologies and trying out new ideas in my projects.
  </p>

  <div class="mt-6 flex items-center gap-x-3">
    <a
      class="btn min-h-9 px-4 text-sm gap-x-2 hover:border-brand/50 hover:text-brand"
      title="My GitHub profile"
      aria-label="My GitHub profile"
      target="_blank"
      rel="noopener noreferrer"
      href={siteConfig.social.github}
    >
      <GithubSvg class="size-4" />
      GitHub
    </a>
    <a
      class="btn min-h-9 px-4 text-sm gap-x-2 hover:border-brand/50 hover:text-brand"
      title="Send me an email"
      aria-label="Send me an email"
      href={siteConfig.social.email}
    >
      <Mail class="size-4" />
      Email
    </a>
  </div>
</div>
```

(The "Check out my GitHub profile" sentence is replaced by the icon-link buttons — same destination, less redundancy. `GithubSvg` import path matches the existing usage in `Footer.astro`.)

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProfileSection.astro
git commit -m "Restyle profile: larger avatar with teal ring, teal title, icon link buttons"
```

---

### Task 5: Convert skills to pill badges

**Files:**
- Modify: `src/components/SkillsList.astro` (full rewrite)
- Modify: `src/components/SkillsSection.astro` (full rewrite)

- [ ] **Step 1: Rewrite SkillsList as pills**

Replace the entire contents of `src/components/SkillsList.astro` with:

```astro
---
import type { Skill } from "@types";

interface Props {
  class?: string;
  skills: Skill[];
  size?: number;
  variant?: "neutral" | "brand";
}

const { class: className, skills, size = 14, variant = "neutral" } = Astro.props;
---

<ul
  class="flex flex-wrap gap-1.5"
  class:list={[className ? className : ""]}
  aria-label="List of skills"
>
  {
    skills.map((skill) => (
      <li
        class="pill"
        class:list={[variant === "brand" ? "pill-brand" : ""]}
        aria-label={skill.name}
      >
        <skill.icon height={size} width={size} />
        <span>{skill.name}</span>
      </li>
    ))
  }
</ul>
```

(The `aria-label` attributes also match what the existing Playwright test `has skills list` expects.)

- [ ] **Step 2: Rewrite SkillsSection with stacked category labels**

Replace the entire contents of `src/components/SkillsSection.astro` with:

```astro
---
import { groupedSkills } from "@data/skills";
import SkillsList from "@/components/SkillsList.astro";
import SectionHeader from "@/components/SectionHeader.astro";
---

<div>
  <SectionHeader title="Skills" />

  <div class="space-y-5">
    {
      groupedSkills.map((groupedSkill) => (
        <div>
          <h3 class="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {groupedSkill.categoryName}
          </h3>
          <SkillsList skills={groupedSkill.skills} />
        </div>
      ))
    }
  </div>
</div>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build completes with no errors. Note: `[projectId].astro` also uses `SkillsList` (with `class:list="gap-y-4"` and `size={20}`) — the new props are backward-compatible, so it still builds; it gets restyled in Task 9.

- [ ] **Step 4: Commit**

```bash
git add src/components/SkillsList.astro src/components/SkillsSection.astro
git commit -m "Convert skills to pill badges with uppercase category labels"
```

---

### Task 6: Convert projects to detail cards

**Files:**
- Modify: `src/components/ProjectsSection.astro` (full rewrite)

- [ ] **Step 1: Rewrite ProjectsSection**

Replace the entire contents of `src/components/ProjectsSection.astro` with:

```astro
---
import { Image } from "astro:assets";
import { ArrowRight } from "@lucide/astro";
import { projects } from "@/data/projects.js";
import SectionHeader from "@/components/SectionHeader.astro";
---

<div>
  <SectionHeader title="Projects" />

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
    {
      projects.map((project) => (
        <a
          class="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition duration-200 hover:-translate-y-0.5 hover:border-brand/50 hover:shadow-md"
          href={project.id}
          title={project.title}
          transition:name={project.id}
        >
          <Image
            class="w-full aspect-video object-cover object-top border-b border-border"
            src={project.src}
            alt={project.alt}
            loading="lazy"
            fetchpriority="low"
            width="720"
            height="405"
            decoding="async"
            format="webp"
          />
          <div class="flex flex-col gap-y-2 p-4">
            <div class="flex items-center justify-between gap-x-2">
              <h3 class="text-sm font-semibold text-card-foreground truncate">
                {project.title}
              </h3>
              <ArrowRight class="size-4 shrink-0 text-brand opacity-0 -translate-x-1 transition group-hover:opacity-100 group-hover:translate-x-0" />
            </div>
            <p class="text-sm text-muted-foreground">{project.description}</p>
            <ul class="mt-1 flex flex-wrap gap-1.5" aria-label="Technologies used">
              {project.technologies.map((tech) => (
                <li class="pill pill-brand">{tech.name}</li>
              ))}
            </ul>
          </div>
        </a>
      ))
    }
  </div>
</div>
```

(Tech pills are text-only here — icons would be visually noisy at this size. The `Eye` icon import is gone; `ArrowRight` replaces it. `rel="noopener noreferrer"` is dropped because these are internal links. The `transition:name` view transition is preserved.)

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProjectsSection.astro
git commit -m "Convert projects to 2-column detail cards with blurb and tech tags"
```

---

### Task 7: Refine work experience timeline

**Files:**
- Modify: `src/components/WorkExperienceSection.astro` (full rewrite)

- [ ] **Step 1: Rewrite WorkExperienceSection**

Replace the entire contents of `src/components/WorkExperienceSection.astro` with:

```astro
---
import { Image } from "astro:assets";
import { workExperience } from "@/data/workExperience";
import SectionHeader from "@/components/SectionHeader.astro";
---

<div>
  <SectionHeader title="Work Experience" />

  <div>
    {
      workExperience.map((job) => (
        <div class="group relative flex gap-x-5">
          <div class="relative group-last:after:hidden after:absolute after:top-12 after:bottom-2 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-border">
            <div class="relative z-10 flex size-10 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
              <Image alt={job.company} src={job.logo} width="40" height="40" />
            </div>
          </div>

          <div class="grow pb-10 group-last:pb-0">
            <h3 class="text-sm font-semibold text-foreground">
              {job.position}
            </h3>

            <p class="mt-0.5 text-sm text-brand">{job.company}</p>

            <span class="mt-1.5 inline-block rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              {job.duration}
            </span>

            <p class="mt-3 text-sm text-muted-foreground">{job.description}</p>

            <ul class="list-disc ms-5 mt-3 space-y-1.5">
              {job.responsibilities.map((responsibility) => (
                <li class="text-sm text-muted-foreground">{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      ))
    }
  </div>
</div>
```

(Hierarchy per spec: position semibold, company in teal, duration as a badge. Timeline line uses `bg-border` and starts below the 40px logo square: `after:top-12 after:start-5`.)

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/WorkExperienceSection.astro
git commit -m "Refine work experience timeline: bordered logo squares, teal company, duration badge"
```

---

### Task 8: Restyle education to match the timeline

**Files:**
- Modify: `src/components/EducationSection.astro` (full rewrite)

- [ ] **Step 1: Rewrite EducationSection**

Replace the entire contents of `src/components/EducationSection.astro` with:

```astro
---
import { Image } from "astro:assets";
import { education } from "@data/education";
import SectionHeader from "@/components/SectionHeader.astro";
---

<div>
  <SectionHeader title="Education" />

  <div>
    {
      education.map((edu) => (
        <div class="group relative flex gap-x-5">
          <div class="relative group-last:after:hidden after:absolute after:top-12 after:bottom-2 after:start-5 after:w-px after:-translate-x-[0.5px] after:bg-border">
            <div class="relative z-10 flex size-10 items-center justify-center overflow-hidden rounded-lg border border-border bg-card">
              <Image
                alt={edu.institution}
                src={edu.logo}
                width="40"
                height="40"
              />
            </div>
          </div>

          <div class="grow pb-10 group-last:pb-0">
            <h3 class="text-sm font-semibold text-foreground">{edu.degree}</h3>

            <p class="mt-0.5 text-sm text-brand">{edu.institution}</p>

            <span class="mt-1.5 inline-block rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              {edu.startYear} - {edu.endYear}
            </span>
          </div>
        </div>
      ))
    }
  </div>
</div>
```

(Replaces the standalone bordered cards with the exact same timeline pattern as work experience, per spec section 6.)

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/EducationSection.astro
git commit -m "Restyle education to match work experience timeline"
```

---

### Task 9: Restyle footer and project detail pages

**Files:**
- Modify: `src/components/Footer.astro:9` and social link classes
- Modify: `src/pages/[projectId].astro` (template section)

- [ ] **Step 1: Update Footer width, spacing, and hover accents**

In `src/components/Footer.astro`, change:

```astro
<footer class="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">
```

to:

```astro
<footer class="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
```

Then add teal hover to each of the three social links (Email, LinkedIn, GitHub) by changing each occurrence of:

```astro
          class="btn btn-rounded"
```

to:

```astro
          class="btn btn-rounded hover:border-brand/50 hover:text-brand"
```

(Three occurrences — use replace-all. The `DarkModeToggle` is untouched.)

- [ ] **Step 2: Restyle the project detail page template**

In `src/pages/[projectId].astro`, replace the template (everything from `<Layout` to `</Layout>`) with:

```astro
<Layout
  title={selectedProject.title}
  description={`Details about the project: ${selectedProject.title}`}
>
  <div
    class="flex flex-col gap-y-3"
    style={`view-transition-name: ${projectId};`}
  >
    <a
      class="self-start text-muted-foreground hover:text-brand group pe-4 py-2"
      title="Back to projects"
      aria-label="Back to projects"
      href="/"
    >
      <ArrowLeftFromLine
        class="size-5 inline-block mr-1 transition-transform group-hover:-translate-x-0.5"
      />
      <span class="text-sm">Back to projects</span>
    </a>

    <h1
      class="text-3xl font-semibold tracking-tight text-foreground text-center mt-2"
    >
      {selectedProject.title}
    </h1>

    <p class="text-sm text-muted-foreground text-center mb-2">
      {selectedProject.description}
    </p>

    <Image
      class="w-full object-cover object-top rounded-xl border border-border"
      src={selectedProject.src}
      alt={selectedProject.alt}
      loading="eager"
      fetchpriority="high"
      width={1130}
      height={700}
      decoding="async"
      format="webp"
    />

    <!-- Leave features as optional for now  -->
    {
      selectedProject.features && (
        <div class="mt-6">
          <SectionHeader title="Key Features" />
          <ul class="text-left text-foreground space-y-4">
            {selectedProject.features.map((feature) => (
              <li class="flex items-start gap-3 text-sm">
                <Check class="text-brand size-3 min-w-3 min-h-3 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    <div class="flex mt-4 flex-col gap-4 sm:flex-row">
      <a
        href={selectedProject.href}
        target="_blank"
        rel="noopener noreferrer"
        class="btn w-full border-brand/40 text-brand hover:bg-brand/10"
      >
        <PlayIcon class="size-4 me-2" />
        Live Demo
      </a>
      {selectedProject.github && (
        <a
          href={selectedProject.github}
          target="_blank"
          rel="noopener noreferrer"
          class="btn w-full hover:border-brand/50 hover:text-brand"
        >
          <CodeIcon class="size-4 me-2" />
          View Code
        </a>
      )}
    </div>

    <div class="mt-6">
      <SectionHeader title="Built With" />
      <SkillsList skills={selectedProject.technologies} variant="brand" size={16} />
    </div>

    <p class="text-sm text-muted-foreground mt-2">
      Last Updated: {selectedProject.lastUpdated}
    </p>
  </div>
</Layout>
```

And add the `SectionHeader` import to the frontmatter, after the `SkillsList` import:

```astro
import SectionHeader from "@/components/SectionHeader.astro";
```

(Changes: back link + Check icons use teal, h1 matches new type scale, screenshot gets rounded border, section headers use `SectionHeader`, Live Demo is a teal-tinted bordered button, Built With uses brand pills. The old `class:list="gap-y-4"` on `SkillsList` is dropped — pill layout handles spacing.)

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: build completes with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.astro src/pages/[projectId].astro
git commit -m "Restyle footer and project detail pages with teal accents"
```

---

### Task 10: Update e2e tests and verify everything

The existing Playwright tests were already stale before this redesign (wrong title expectation, selectors that never matched). Update them to match the new UI, then run the full verification.

**Files:**
- Modify: `tests/e2e/ProfileSection.test.ts` (full rewrite)

- [ ] **Step 1: Rewrite the e2e tests**

Replace the entire contents of `tests/e2e/ProfileSection.test.ts` with:

```ts
// NOTE: Run localhost when running tests
// Run `npx playwright test` to run tests

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(page).toHaveTitle('Matt Flavin | Full Stack Developer');
});

test('has github profile link', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(
    page.getByRole('link', { name: 'My GitHub profile' }).first(),
  ).toHaveAttribute('href', 'https://github.com/mflavin');
});

test('has linkedin profile link', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(
    page.getByRole('link', { name: 'My LinkedIn profile' }).first(),
  ).toHaveAttribute('href', 'https://www.linkedin.com/in/matt-flavin/');
});

test('has profile image', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(page.locator('img[alt="mflavin"]')).toBeVisible();
});

test('has skills list', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(
    page.locator('ul[aria-label="List of skills"]').first(),
  ).toBeAttached();
  await expect(page.locator('li[aria-label="Vue"]').first()).toBeAttached();
});

test('has project cards linking to detail pages', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(page.locator('a[href="pigtracks"]').first()).toBeAttached();
});

test('project detail page has live demo link', async ({ page }) => {
  await page.goto('http://localhost:4321/pigtracks');
  await expect(
    page.locator('a[href="https://pigtracks.netlify.app/"]'),
  ).toBeAttached();
});
```

- [ ] **Step 2: Run the e2e tests**

Start the dev server in one terminal: `npm run dev`
Then run: `npx playwright test`
Expected: all 7 tests PASS. (If the dev server port differs from 4321, fix the port, not the tests.)

- [ ] **Step 3: Final build + format**

Run: `npm run build && npm run format`
Expected: build succeeds; prettier normalizes any formatting drift in edited files.

- [ ] **Step 4: Manual visual QA (with the user)**

With `npm run dev` running, check:
- Dark and light modes (toggle in footer)
- Mobile viewport: project grid collapses to 1 column, profile wraps cleanly
- Keyboard tab order and visible focus rings
- View transition from project card to detail page still animates
- Teal text contrast in light mode (teal-600 on white) looks readable

- [ ] **Step 5: Commit**

```bash
git add tests/e2e/ProfileSection.test.ts
git commit -m "Update e2e tests for redesigned UI"
```
