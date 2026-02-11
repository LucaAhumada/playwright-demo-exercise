import { type Locator, type Page } from '@playwright/test';

export class RequestQuotePage {
  readonly page: Page;
  readonly heading: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly companyInput: Locator;
  readonly industrySelect: Locator;
  readonly techIntegrationCheckbox: Locator;
  readonly timelineSelect: Locator;
  readonly volumeInput: Locator;
  readonly projectDetailsInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.heading = page.getByRole('heading', { name: 'Request a Quote' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name *' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name *' });
    this.emailInput = page.getByRole('textbox', { name: 'Email Address *' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone Number *' });
    this.companyInput = page.getByRole('textbox', { name: 'Company Name *' });
    this.industrySelect = page.getByLabel('Industry *');
    this.techIntegrationCheckbox = page.getByRole('checkbox', { name: 'Technology Integration' });
    this.timelineSelect = page.getByLabel('Timeline *');
    this.volumeInput = page.getByRole('textbox', { name: 'Estimated Monthly Volume' });
    this.projectDetailsInput = page.getByRole('textbox', { name: 'Project Details *' });
    this.submitButton = page.getByRole('button', { name: 'Submit Request' });
  }

  async fillForm(firstName: string, lastName: string, email: string, phone: string, company: string, projectDetails: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
    await this.companyInput.fill(company);
    await this.industrySelect.selectOption('technology');
    await this.techIntegrationCheckbox.click();
    await this.timelineSelect.selectOption('3-6-months');
    await this.projectDetailsInput.fill(projectDetails);
  }

  async submit() {
    this.page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await this.submitButton.click();
  }
}
