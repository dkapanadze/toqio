import { IContactPage } from "../types";
import { expect } from "@playwright/test";

export const validateErrorMessages = async (
  expectedLength: number,
  expectedMessage: string,
  contactPage: IContactPage,
) => {
  const errorMessagesList = await contactPage.getErrorMessages();
  expect(errorMessagesList).toHaveLength(expectedLength);
  expect(errorMessagesList).toEqual(
    expect.arrayContaining(Array(expectedLength).fill(expectedMessage)),
  );
};
