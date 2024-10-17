import { Locator, Page } from "@playwright/test";

export interface ILandingPage {
  clickContactBtnAndSwitchToNewTab(): Promise<Page>;
  getLanguage(): Promise<string>;
  goTo(): Promise<void>;
  clickBurgerMenu(): Promise<void>;
  getNavigationItems(menuItem: string): Promise<Locator>;
}
