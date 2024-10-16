import { Page, Locator } from "@playwright/test";
import { ILandingPage } from "../types";
import { landingPageLocators } from "../locators/landingPageLocators";

export class LandingPage implements ILandingPage {
  private readonly locators: {
    contactUsButton: Locator;
    language: Locator;
  };

  constructor(private readonly page: Page) {
    const { contactUsButton, language } = landingPageLocators;

    this.locators = {
      contactUsButton: this.page.getByRole(contactUsButton.role, {
        name: contactUsButton.name,
      }),
      language: this.page.locator(language),
    };
  }

  public async clickContactBtnAndSwitchToNewTab(): Promise<Page> {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      this.locators.contactUsButton.click(),
    ]);

    return newPage;
  }

  public async getLanguage(): Promise<string> {
    const language = (await this.locators.language.textContent())!;

    const languages = language.split(" ").filter((lang) => lang.trim() !== "");

    const trimmedLanguages = languages.map((lang) => lang.trim());

    return trimmedLanguages[trimmedLanguages.length - 1];
  }
}
