
import {expect, test} from '@playwright/test';

test('Different Locator Strategy', async({page}) => {

    await page.goto("https://www.saucedemo.com/");
    await page.pause();

});