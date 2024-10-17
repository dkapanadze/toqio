import { ContactPageLocators } from "../types";

export const contactPageLocators: Record<string, ContactPageLocators> = {
  en: {
    contactPageTitle: "h1",
    requiredField: ".hs-form-required",
    acceptCookieBtn: { role: "button", name: /accept all/i },

    nameField: { role: "textbox", name: /first name/i },
    lastNameField: { role: "textbox", name: /last name/i },
    emailField: { role: "textbox", name: /e-mail/i },
    phoneNumberField: { role: "textbox", name: /phone number/i },
    companyNameField: { role: "textbox", name: /company name/i },
    countryField: { role: "textbox", name: /country\/region/i },
    submitBtn: { role: "button", name: /send/i },
    ErrorMessagesList: { role: "alert", name: /error/i },
    dropDownCountry: { role: "combobox", name: /headquartered in/i },
    dropdownAboutUs: { role: "combobox", name: /how did you hear about us\?/i },
    checkBox: {
      role: "checkbox",
      name: /by submitting this form, you agree to our privacy policy/i,
    },
  },
  es: {
    contactPageTitle: "h1",
    requiredField: ".hs-form-required",
    acceptCookieBtn: { role: "button", name: /aceptar todo/i },
    nameField: { role: "textbox", name: /nombre/i },
    lastNameField: { role: "textbox", name: /apellido\(s\)/i },
    emailField: { role: "textbox", name: /correo electrónico/i },
    phoneNumberField: { role: "textbox", name: /teléfono/i },
    companyNameField: { role: "textbox", name: /empresa/i },
    countryField: { role: "textbox", name: /ubicado en/i },
    submitBtn: { role: "button", name: /enviar/i },
    ErrorMessagesList: { role: "alert", name: /error/i },
    dropDownCountry: { role: "combobox", name: /ubicado en/i },
    dropdownAboutUs: {
      role: "combobox",
      name: /¿cómo te enteraste de nosotros\?/i,
    },
    checkBox: {
      role: "checkbox",
      name: /al enviar este formulario, aceptas nuestra política de privacidad/i,
    },
  },
};
