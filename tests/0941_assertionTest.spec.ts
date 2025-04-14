import {expect, test} from '@playwright/test'

test('Visible/Hidden Assertion',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeVisible();
    await page.locator('#hide-textbox').click();
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('[placeholder="Hide/Show Example"]')).toBeVisible();
    await page.close();

    //npx playwright test 0941_assertionTest.spec.ts --headed --project=chromium
})

//0942 Assertions - Present/Not Present

test.only('Present/Not Present Assertion',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.locator('text="Add Element"').click();
    await expect(page.locator('.added-manually')).toHaveCount(1);
    await page.locator('text="Delete"').click();
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.close();

    //npx playwright test 0941_assertionTest.spec.ts --headed --project=chromium
})