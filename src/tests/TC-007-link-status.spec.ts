import { test, expect } from "@playwright/test";
import { checkLinkStatus, extractLinks } from "../utils";

test("TC-007: Verify Link Status on the Landing Page", async ({ page }) => {
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

  let allLinksWorking = true;

  results.forEach(({ link, status }) => {
    if (typeof status === "number" && status >= 400) {
      console.warn(`Link ${link} is not accessible. Status code: ${status}`);
      allLinksWorking = false;
    }
  });

  if (allLinksWorking) {
    console.log("All links are working properly ");
  }
});
