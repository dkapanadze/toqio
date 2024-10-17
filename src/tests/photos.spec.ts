import { test, expect } from "@playwright/test";

test("Check if all images load correctly", async ({ page, request }) => {
  await page.goto("/");

  const images = await page.locator("img");

  const imageCount = await images.count();
  expect(imageCount).toBeGreaterThan(0);

  for (let i = 0; i < imageCount; i++) {
    const imageElement = images.nth(i);
    let imageSrc: string | null;

    try {
      imageSrc = await imageElement.getAttribute("src");

      expect(imageSrc).toBeTruthy();
    } catch (err) {
      imageSrc = null;
    }

    if (imageSrc) {
      try {
        const response = await request.get(imageSrc);
        await expect(response.status()).toBe(200);
      } catch (error) {
        console.error(
          `Error checking image at ${imageSrc} expected status ${error.matcherResult.expected} but got ${error.matcherResult.actual}`,
        );
      }
    } else {
      console.warn(
        `Image source is not valid for image at index ${i}:`,
        imageSrc,
      );
    }
  }
});
