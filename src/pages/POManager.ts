import { IContactPage, ILandingPage } from "../types";
import { ContactPage } from "./contactPage";
import { Page } from "@playwright/test";
import { LandingPage } from "./landingPage";

export class POManager {
  private contactPage: IContactPage;
  private readonly landingPage: ILandingPage;
  constructor(private readonly page: Page) {
    this.landingPage = new LandingPage(this.page);
  }

  public getContactPage(newTab: Page, language: string): IContactPage {
    this.contactPage = new ContactPage(newTab, language);
    return this.contactPage;
  }

  public getLandingPage() {
    return this.landingPage;
  }
}
