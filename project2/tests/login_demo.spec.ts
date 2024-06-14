import { test, expect } from '@playwright/test';

test('test41', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    await page.pause();
    await page.locator('id=username').fill('Deepak')
    await page.locator('id=password').fill('jagtap')
    await page.waitForSelector('id=log-in', {timeout: 4000})
    await page.locator('id=log-in').click
})

test('test42', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/login?returnUrl=%2F')
    await page.pause();
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').fill('jagtapda2019@gmail.com');
    await page.getByLabel('Email:').press('Tab');
    await page.getByLabel('Password:').fill('Jagtap@2024');
    await page.getByRole('button', { name: 'Log in' }).click();
    //this line added for git push demo
});