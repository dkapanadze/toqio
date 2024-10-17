import { Page } from "@playwright/test";

export const extractLinks = async (page: Page) => {
  return await page.evaluate(() => {
    const links: string[] = [];
    const anchors = document.querySelectorAll("a");
    anchors.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (href) {
        links.push(href);
      }
    });
    return links;
  });
};
