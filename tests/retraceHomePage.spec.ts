import {test,expect} from '@playwright/test';

test('Retrace Home Page Test', async({page})=> {

    await page.goto('https://retrace.ai/')

    // Expect a title

    await expect(page).toHaveTitle('Home - Retrace');

});