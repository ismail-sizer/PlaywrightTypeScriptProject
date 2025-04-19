import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://insights.mobileaction.co/auth/login/searchads?hsCtaAttrib=176885261099');
  await page.getByRole('textbox', { name: 'Email' }).fill('te');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testismail@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test_010203');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByText('Failed to login, please make').click();
  await expect(page.getByText('Failed to login, please make')).toBeVisible();
  await expect(page.getByRole('status')).toContainText('Failed to login, please make sure your email and password are correct.');
});