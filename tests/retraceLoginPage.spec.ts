import { test, expect } from '@playwright/test';

test('Retrace Home Page Test', async ({ page }) => {
  await page.goto('https://staging.retrace.ai/login');
  await page.getByRole('textbox', { name: 'Enter your email address' }).click();
  await page.getByRole('textbox', { name: 'Enter your email address' }).fill('testing@retrace.com');
  await page.getByRole('textbox', { name: 'Enter your password' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('staging_retrace');
  await page.getByRole('textbox', { name: 'Enter the Partner ID' }).click();
  await page.getByRole('textbox', { name: 'Enter the Partner ID' }).fill('abcdefgh');
  await page.getByRole('button', { name: 'Logins' }).click();
});