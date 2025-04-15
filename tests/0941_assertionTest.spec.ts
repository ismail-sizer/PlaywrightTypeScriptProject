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

//0943 Assertions - Present/Not Present

test('Present/Not Present Assertion',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.locator('text="Add Element"').click();
    await expect(page.locator('.added-manually')).toHaveCount(1);
    await page.locator('text="Delete"').click();
    await expect(page.locator('.added-manually')).not.toHaveCount(1);
    await page.close();

})

    //npx playwright test 0941_assertionTest.spec.ts --headed --project=chromium


 //0944 Assertions - Enabled/Disabled

 test('Enabled/Disabled Assertion',async({page})=>{
    await page.goto('https://omayo.blogspot.com/');
    await expect(page.locator('#but2')).toBeEnabled();
    await expect(page.locator('#but1')).toBeDisabled();
    await page.close();
 

})

//npx playwright test 0941_assertionTest.spec.ts --headed --project=chromium

 //0945 Assertions - Text Match / Mismatch

 test('Text Match / Mismatch Assertion',async({page})=>{
    await page.goto('https://omayo.blogspot.com/');
    await expect(page.locator('#but2')).toHaveText('Button2');
    await expect(page.locator('#but1')).not.toHaveText('abcd');
    await page.close();
})

//npx playwright test 0941_assertionTest.spec.ts --headed --project=chromium

 //0946. Assertions - Element Attributes

 test('Element Attributes Assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('name','username');
    await expect(page.locator('input[placeholder="Username"]')).toHaveAttribute('class',/.*oxd-input/);
    await page.close();
})

//npx playwright test 0941_assertionTest.spec.ts --headed --project=chromium

 //0947. Assertions - URL and Title

 test('URL and Title Assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    //Full URL Assertion
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Full URL Assertion
    await expect(page).toHaveURL(/.*demo.orangehrmlive.com/);

    //Full Title
    await expect(page).toHaveTitle('OrangeHRM');

    await page.close();
})

//npx playwright test 0941_assertionTest.spec.ts --headed --project=chromium


 //0948. Assertions - Screenshot

 test.only('Screenshot Assertion',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.waitForTimeout(2000);  // Wait for 2 seconds
    await expect(page).toHaveScreenshot();
    await page.close();
})

//npx playwright test 0941_assertionTest.spec.ts --headed --project=chromium