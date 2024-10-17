import test from "../fixtures/navigation.fixture";

import { expect } from "playwright/test";

test.describe("Navigation Tests", () => {
  test("TC-004: Verify Desktop Navigation to All Menu Items", async ({
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

  test.only("TC-005: Verify Burger Menu Functionality on Tablet View", async ({
    page,
    landingPage,
    menuItems,
  }) => {
    await page.setViewportSize({ width: 800, height: 600 });
    let firstClick = true;
    await landingPage.clickBurgerMenu();
    for (const item of menuItems) {
      !firstClick && (await landingPage.clickBurgerMenu());
      firstClick = false;
      let nav;
      if (!item.parent) {
        nav = await landingPage.getNavigationItems(item.text);
        await nav.click();
        expect(page.url()).toContain(item.url);
      } else {
        break;
      }
    }
  });
});
