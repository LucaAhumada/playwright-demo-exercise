import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://astroflow.wingflows.com/');
  await expect(page.locator('.text-white.mb-6.leading-tight')).toBeVisible();
  await page.locator('.bg-blue-600\\!.text-white\\!.shadow-2xl\\!').click();
  await expect(page.locator('h1.animate-fadeInUp span')).toBeVisible();
  await page.locator('input').nth(0).click();
  await page.locator('input').nth(0).fill('Name Example');
  await page.locator('input').nth(1).click();
  await page.locator('input').nth(1).fill('Last Name Example');
  await page.locator('input').nth(0).click();
  await page.locator('input').nth(2).click();
  await page.locator('input').nth(2).fill('test@playwright.dev');
  await page.locator('input').nth(3).click();
  await page.locator('input').nth(3).fill('9123123123');
  await page.locator('input').nth(4).click();
  await page.locator('input').nth(4).fill('Playwright');
  await page.locator('#industry').selectOption({ value: 'technology' });
  await page.locator('#technology').click(); 
  await page.locator('#timeline').selectOption('3-6-months');
  await page.locator('#volume').click();
  await page.locator('#volume').fill('10000');
  await page.locator('textarea[name="details"]').click();
  await page.locator('textarea[name="details"]').fill('Test example request');
  // Missing step to submit the form
});