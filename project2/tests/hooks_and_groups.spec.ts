import { test, expect } from '@playwright/test';

test.describe('All My Tests', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await page.waitForURL('https://www.saucedemo.com/inventory.html');
    })

    test('homepage', async ({ page }) => {

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    })

    test('logout', async ({ page }) => {

        await page.getByRole('button', { name: 'Open Menu' }).click();
        await page.locator('[data-test="logout-sidebar-link"]').click();

    })

    //here afterAll shoul use but its not working so for temp afterEach used.
    test.afterEach(async ({ page }) => {
        await page.close();
    })

})