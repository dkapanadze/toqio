import { test, expect } from "@playwright/test";
import { checkLinkStatus, extractLinks } from "../utils";

test("Check links on landing page", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const links = await extractLinks(page);
  const results: { link: string; status: number | string }[] = [];

  for (const link of links) {
    if (link.includes("http")) {
      const status = await checkLinkStatus(page, link);
      results.push({ link, status });
    }
  }

  console.log("Link Status Report:");
  results.forEach(({ link, status }) => {
    console.log(`${link}: ${status}`);
    expect(status).toBeLessThan(400);
  });
});
