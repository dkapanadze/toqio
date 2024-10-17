import { Page } from "@playwright/test";

export const checkLinkStatus = async (page: Page, link: string) => {
  try {
    const response = await page.goto(link, {
      waitUntil: "domcontentloaded",
      timeout: 5000,
    });
    return response ? response.status() : "No response";
  } catch (error) {
    return "Error: " + error.message;
  }
};
