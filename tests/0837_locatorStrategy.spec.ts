
import {expect, test} from '@playwright/test';

test('Different Locator Strategy', async({page}) => {

    await page.goto("https://www.saucedemo.com/");

    //Directly by using object property
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('standard_user');
    await page.click('[placeholder="Password"]');
    await page.locator('data-test=password').fill('secret_sauce');


    //Using CSS selector
    await page.locator('#user-name').fill('standard_user');

    //Using Xpath Selector
    await page.locator('//input[@id="password"]').fill('secret_sauce');

    //Using Text
    //Way-1
    // await page.locator('text=login').click;
    //Way-2
    await page.locator('input:has-text("Login")').click;


});