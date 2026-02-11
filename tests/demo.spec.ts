import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { RequestQuotePage } from '../pages/RequestQuotePage';

test('test', async ({ page }) => {
  const homePage = new HomePage(page);
  const requestQuotePage = new RequestQuotePage(page);

  await homePage.goto();
  await expect(homePage.mainHeading).toBeVisible();
  await homePage.clickRequestQuote();
  await expect(requestQuotePage.heading).toBeVisible();

  await requestQuotePage.fillForm(
    'Name Example',
    'Last Name Example',
    'test@playwright.dev',
    '9123123123',
    'Playwright',
    'Test example request designed in Playwright'
  );

  await requestQuotePage.submit();
});