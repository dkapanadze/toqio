import { Page } from "@playwright/test";

export interface ILandingPage {
  clickContactBtnAndSwitchToNewTab(): Promise<Page>;
  getLanguage(): Promise<string>;
}
