export interface IContactPage {
  getContactPageTitle(): Promise<string | null>;
  acceptAllCookies(): Promise<void>;
  enterName(name: string): Promise<void>;
  enterEmail(email: string): Promise<void>;
  enterLastName(lastName: string): Promise<void>;
  enterCompanyName(companyName: string): Promise<void>;
  enterCountry(countryName: string): Promise<void>;
  clickRequiredCheckBox(): Promise<void>;
  selectSocialMedia(media: string): Promise<void>;
  clickSubmitBtn(): Promise<void>;
  getErrorMessages(): Promise<string[]>;
  enterPhoneNumber(phoneNumber: string): Promise<void>;
  selectCountry(country: string): Promise<void>;
  clickRequiredCheckBox(): Promise<void>;
  getRequiredInputs();
}
