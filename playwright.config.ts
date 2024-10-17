import { defineConfig, devices } from "@playwright/test";

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

export default defineConfig({
  testDir: "src/tests",

  fullyParallel: true,

  forbidOnly: !!process.env.CI,
  timeout: 30000,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["html", { outputFolder: "test-results", open: "never" }],
    ["allure-playwright"],
  ],

  use: {
    baseURL: process.env.BASE_URL || "https://toqio.co/",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    actionTimeout: 10000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], headless: true }, // Run headless in CI
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"], headless: true },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], headless: true },
    },
  ],
});
