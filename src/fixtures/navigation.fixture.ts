import { test as base } from "@playwright/test";
import { menuItems } from "../data/menuItems";
import { POManager } from "../pages";
import { ILandingPage } from "../types";

interface NavigationFixture {
  menuItems: {
    text: string;
    url: string;
    clickAble: boolean;
    parent?: string;
  }[];
  landingPage: ILandingPage;
}

const test = base.extend<NavigationFixture>({
  menuItems: async ({}, use) => {
    await use(menuItems);
  },
  landingPage: async ({ page }, use) => {
    const pomManager = new POManager(page);
    const landingPage = pomManager.getLandingPage();
    await landingPage.goTo();
    await use(landingPage);
  },
});

export default test;
