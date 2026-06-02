// NOTE: Run localhost when running tests
// Run `npx playwright test` to run tests

import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(page).toHaveTitle('mflavin portfolio');
});

test('leads to github profile', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await page.getByText('More about me').click();

  page.on('popup', async (popup) => {
    await popup.waitForLoadState();
    await expect(popup).toHaveTitle('mflavin · GitHub');
    await expect(popup).toHaveURL('https://github.com/mflavin');
  });
});

test('leads to linkedin profile', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await page.getByText('More about me').click();

  page.on('popup', async (popup) => {
    await popup.waitForLoadState();
    await expect(popup).toHaveTitle('Sign Up | LinkedIn');
    // TODO: Set up a linkedin account
    // await expect(popup).toHaveURL('https://www.linkedin.com/in/mflavin/');
  });
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

test('has project list', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(
    page.locator('a[href="https://pigtracks.netlify.app/"]').first(),
  ).toBeAttached();
});
