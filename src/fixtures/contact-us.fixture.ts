import { test as base, chromium, Browser, Page } from "@playwright/test";

import testDataForContact from "../data/contactUsData.json";
import { IContactPage } from "../types";
import { POManager } from "../pages";

type TestFixtures = {
  page: Page;
  contactPage: IContactPage;
  testDataForContact: {
    email: string;
    name: string;
    country: string;
    mobileNumber: string;
    firstName: string;
    companyName: string;
    lastName: string;
  };
  language: string;
};

export const test = base.extend<TestFixtures>({
  page: async ({}, use) => {
    const browser: Browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://toqio.co/");
    await use(page);
  },

  language: async ({ page }, use) => {
    const pomManager = new POManager(page);
    const landingPage = pomManager.getLandingPage();

    const language = await landingPage.getLanguage();

    await use(language);
  },
  contactPage: async ({ page, language }, use) => {
    const pomManager = new POManager(page);
    const landingPage = pomManager.getLandingPage();

    const newPage = await landingPage.clickContactBtnAndSwitchToNewTab();
    const contactPage = pomManager.getContactPage(newPage, language);
    await contactPage.acceptAllCookies();
    await use(contactPage);
  },

  testDataForContact: async ({}, use) => {
    await use(testDataForContact);
  },
});
