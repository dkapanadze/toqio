import { expect } from "@playwright/test";

import { validateErrorMessages } from "../utils/validateErrorMessage";
import errorMessages from "../data/errorMessages";
import { test } from "../fixtures/contact-us.fixture";

test.describe("Contact Page Form Validation Tests", () => {
  test("TC-001: should display validation errors for empty form submission", async ({
    contactPage,
  }) => {
    await contactPage.clickSubmitBtn();
    const requiredFieldCount = await contactPage.getRequiredInputs();

    await validateErrorMessages(
      requiredFieldCount,
      errorMessages["en"].requiredField,
      contactPage,
    );
  });

  test("TC-002: should display invalid  email and phone number format", async ({
    contactPage,
    testDataForContact,
  }) => {
    const { invalidData, validData } = testDataForContact;

    await contactPage.enterName(validData.firstName);
    await contactPage.enterCompanyName(validData.companyName);
    await contactPage.enterLastName(validData.lastName);
    await contactPage.clickRequiredCheckBox();
    await contactPage.enterPhoneNumber(invalidData.mobileNumber);
    await contactPage.selectCountry(validData.country);
    await contactPage.enterEmail(invalidData.email);
    await contactPage.clickSubmitBtn();
    const errorMessagesList = await contactPage.getErrorMessages();
    expect(errorMessagesList).toContain(errorMessages["en"].wrongMobileNumber);
    expect(errorMessagesList).toContain(errorMessages["en"].incorrectEmail);
  });

  test("TC-003: should submit the form with valid credentials", async ({
    contactPage,
    testDataForContact,
  }) => {
    const validData = testDataForContact.validData;

    await contactPage.enterName(validData.firstName);
    await contactPage.enterCompanyName(validData.companyName);
    await contactPage.enterLastName(validData.lastName);
    await contactPage.enterEmail(validData.email);
    await contactPage.enterCountry(validData.country);
    await contactPage.enterPhoneNumber(validData.mobileNumber);
    await contactPage.selectCountry(validData.country);
    await contactPage.clickRequiredCheckBox();
    await contactPage.clickSubmitBtn();
  });
});
