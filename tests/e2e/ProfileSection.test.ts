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
