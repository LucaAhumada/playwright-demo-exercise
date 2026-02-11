import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly requestQuoteLink: Locator;
  readonly mainHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.requestQuoteLink = page.getByRole('link', { name: 'Request a Quote' }).first();
    this.mainHeading = page.getByRole('heading', { name: 'Optimize Your Operations with' });
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL ?? 'https://astroflow.wingflows.com/');
  }

  async clickRequestQuote() {
    await this.requestQuoteLink.click();
  }
}
