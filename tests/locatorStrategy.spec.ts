
import {expect, test} from '@playwright/test';

test('Different Locator Strategy', async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.locator('id="user-name"').fill('standard_user');
    await page.locator('//input[@id="user-name"]');
    await page.locator('[name="user-name"]');
    await page.locator('text=login').click;


});