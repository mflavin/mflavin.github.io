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

// Check to see if my profile image loaded
test('has profile image', async ({ page }) => {
  await page.goto('http://localhost:4321/');
  await expect(page.locator('img[alt="mflavin"]')).toBeVisible();
});
