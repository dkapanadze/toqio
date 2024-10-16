import { expect } from "@playwright/test";

import { validateErrorMessages } from "../utils/validateErrorMessage";
import errorMessages from "../data/errorMessages";
import { test } from "../fixtures/contact-us.fixture";

test.describe("Contact Page Form Validation Tests", () => {
  test("validate empty form submission errors", async ({ contactPage }) => {
    await contactPage.clickSubmitBtn();
    await validateErrorMessages(
      6,
      errorMessages["en"].requiredField,
      contactPage,
    );
  });

  test("validate incorrect mobile number", async ({ contactPage }) => {
    await contactPage.enterPhoneNumber("ccc");
    await contactPage.clickSubmitBtn();
    const errorMessagesList = await contactPage.getErrorMessages();
    expect(errorMessagesList).toContain(errorMessages["en"].wrongMobileNumber);
  });

  test("correct credentials", async ({ contactPage, testDataForContact }) => {
    await contactPage.enterName(testDataForContact.firstName);
    await contactPage.enterCompanyName(testDataForContact.companyName);
    await contactPage.enterLastName(testDataForContact.lastName);
    await contactPage.enterEmail(testDataForContact.email);
    await contactPage.enterCountry(testDataForContact.country);
    await contactPage.enterPhoneNumber(testDataForContact.mobileNumber);
    await contactPage.selectCountry(testDataForContact.country);
    await contactPage.clickRequiredCheckBox();
    await contactPage.clickSubmitBtn();
  });
});
