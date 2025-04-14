import {test} from '@playwright/test'

test('Login Test for Orange', async({page}) =>{

    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('input[placeholder="Username"]').fill('Admin');
    await page.locator('input[placeholder="Password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('text=Logout').click();
    await page.close

     // npx playwright test 0940_loginTest.spec.ts --headed --project=chromium

})