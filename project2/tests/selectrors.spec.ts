import { test, expect } from '@playwright/test';

test('test3', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.pause()
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
})