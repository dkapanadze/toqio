import { contactPageLocators } from "../locators/contactPageLocators";
import { Page, Locator } from "playwright";
import { IContactPage } from "../types";

export class ContactPage implements IContactPage {
  private readonly locators: {
    contactPageTitle: Locator;
    acceptCookieBtn: Locator;
    nameField: Locator;
    lastNameField: Locator;
    emailField: Locator;
    phoneNumberField: Locator;
    companyNameField: Locator;
    countryField: Locator;
    submitBtn: Locator;
    errorMessagesList: Locator;
    dropDownCountry: Locator;
    checkBox: Locator;
    dropdownAboutUs: Locator;
  };

  constructor(private readonly page: Page, private readonly language: string) {
    const {
      contactPageTitle,
      acceptCookieBtn,
      nameField,
      lastNameField,
      emailField,
      phoneNumberField,
      companyNameField,
      countryField,
      submitBtn,
      ErrorMessagesList,
      dropDownCountry,
      checkBox,
      dropdownAboutUs,
    } = contactPageLocators[this.language];

    this.locators = {
      contactPageTitle: this.page.locator(contactPageTitle),
      acceptCookieBtn: this.page.getByRole(acceptCookieBtn.role, {
        name: acceptCookieBtn.name,
      }),
      nameField: this.page.getByRole(nameField.role, { name: nameField.name }),
      lastNameField: this.page.getByRole(lastNameField.role, {
        name: lastNameField.name,
      }),
      emailField: this.page.getByRole(emailField.role, {
        name: emailField.name,
      }),
      phoneNumberField: this.page.getByRole(phoneNumberField.role, {
        name: phoneNumberField.name,
      }),
      companyNameField: this.page.getByRole(companyNameField.role, {
        name: companyNameField.name,
      }),
      countryField: this.page.getByRole(countryField.role, {
        name: countryField.name,
      }),
      submitBtn: this.page.getByRole(submitBtn.role, { name: submitBtn.name }),
      errorMessagesList: this.page.getByRole(ErrorMessagesList.role),
      dropDownCountry: this.page.getByRole(dropDownCountry.role, {
        name: dropDownCountry.name,
      }),
      checkBox: this.page.getByRole(checkBox.role, { name: checkBox.name }),
      dropdownAboutUs: this.page.getByRole(dropdownAboutUs.role, {
        name: dropdownAboutUs.name,
      }),
    };
  }

  public async getContactPageTitle(): Promise<string | null> {
    return await this.locators.contactPageTitle.textContent();
  }

  public async fillField(field: Locator, value: string): Promise<void> {
    await field.fill(value);
  }

  public async enterName(name: string): Promise<void> {
    await this.fillField(this.locators.nameField, name);
  }

  public async enterEmail(email: string): Promise<void> {
    await this.fillField(this.locators.emailField, email);
  }

  public async enterLastName(lastName: string): Promise<void> {
    await this.fillField(this.locators.lastNameField, lastName);
  }

  public async enterPhoneNumber(phoneNumber: string): Promise<void> {
    await this.fillField(this.locators.phoneNumberField, phoneNumber);
  }

  public async enterCompanyName(companyName: string): Promise<void> {
    await this.fillField(this.locators.companyNameField, companyName);
  }

  public async enterCountry(countryName: string): Promise<void> {
    await this.fillField(this.locators.countryField, countryName);
  }

  public async acceptAllCookies(): Promise<void> {
    await this.locators.acceptCookieBtn.click();
  }

  public async clickSubmitBtn(): Promise<void> {
    await this.locators.submitBtn.click();
  }

  public async clickRequiredCheckBox(): Promise<void> {
    await this.locators.checkBox.click();
  }

  public async selectCountry(country: string): Promise<void> {
    await this.locators.dropDownCountry.selectOption({ label: country });
  }

  public async selectSocialMedia(media: string): Promise<void> {
    await this.locators.dropdownAboutUs.selectOption({ label: media });
  }

  public async getErrorMessages(): Promise<string[]> {
    const errorMessages = await this.locators.errorMessagesList
      .locator("li label")
      .allTextContents();
    return errorMessages;
  }
}
