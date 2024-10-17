import test from "../fixtures/navigation.fixture";

import { expect } from "playwright/test";

test.describe("Navigation Tests", () => {
  test("Navigate to the Contact Us page", async ({
    page,
    landingPage,
    menuItems,
  }) => {
    for (const item of menuItems) {
      let nav;
      if (!item.parent) {
        nav = await landingPage.getNavigationItems(item.text);
      } else {
        (await landingPage.getNavigationItems(item.parent)).hover();
        nav = await landingPage.getNavigationItems(item.text);
      }
      await nav.click();
      expect(page.url()).toContain(item.url);
    }
  });

  test("Navigate to the Contact Us page on tablet", async ({
    page,
    landingPage,
    menuItems,
  }) => {
    await page.setViewportSize({ width: 800, height: 600 });

    await landingPage.clickBurgerMenu();
    for (const item of menuItems) {
      let nav;
      if (!item.parent) {
        nav = await landingPage.getNavigationItems(item.text);
        await nav.click();
        expect(page.url()).toContain(item.url);
      }
      await landingPage.clickBurgerMenu();
    }
  });
});
