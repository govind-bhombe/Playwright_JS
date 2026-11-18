import { test } from '@playwright/test';

test('debug', async ({ page }) => {

  console.log('URL Before:', await page.url());

  await page.goto(
    'https://automationpracticehubapp.netlify.app/'
  );

  console.log('URL After:', await page.url());

  await page.waitForTimeout(10000);
});