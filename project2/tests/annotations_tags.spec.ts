import { test } from '@playwright/test';


//ANNOTATIONS
//Annotations are used for some logical or conditional functionalities.
//Can apply with single or set of tests

test.describe('Annotations', () => {

    //test get skipped
    test.skip('TestOne', async ({ page }) => {
    });


    //test will pass, but show error as "Expected to fail, but passed." mark as failed.
    test('TestTwo', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        test.fail();
    });


    //test will be abborted
    test.fixme('TestThree', async ({ page }) => {
        // ...
    });


    //mark the test as slow and triples the test timeout.
    test('TestFour', async ({ page }) => {
        test.slow();
    });


    //runs specific test
    test.only('TestFive', async ({ page }) => {
       await page.goto('https://www.saucedemo.com/');
    });


    //skip if condition matches
    test('testSix', async ({ page, browserName }) => {
        test.skip(browserName === 'chromium', 'Still working on it');
        await page.goto('https://www.saucedemo.com/');
    });

});




//TAGS
//Run only tests having @smoke tag
// npx playwright test --project chromium --headed --grep "@smoke"  here not 
// mentioned any spec test name but only tag.

//all test with @smoke tag will skip without @smoke tag will excecute.
//npx playwright test --grep-invert "@smoke

test.describe('Tags', () => {
    test('TagsO @smoke', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });
});