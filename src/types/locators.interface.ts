type LocatorRole =
  | "button"
  | "textbox"
  | "alert"
  | "combobox"
  | "checkbox"
  | "alertdialog"
  | "application"
  | "article"
  | "banner"
  | "blockquote"
  | "caption"
  | "cell"
  | "code"
  | "columnheader"
  | "dialog"
  | "document"
  | "grid"
  | "heading"
  | "img"
  | "link"
  | "listbox"
  | "menu"
  | "menubar"
  | "navigation"
  | "note"
  | "progressbar"
  | "radio"
  | "row"
  | "rowheader"
  | "scrollbar"
  | "status"
  | "tab"
  | "tabpanel"
  | "textbox"
  | "tooltip"
  | "tree"
  | "treeitem";

interface LocatorConfig {
  role: LocatorRole;
  name: string | RegExp;
}

export interface ContactPageLocators {
  contactPageTitle: string;
  acceptCookieBtn: LocatorConfig;
  nameField: LocatorConfig;
  lastNameField: LocatorConfig;
  emailField: LocatorConfig;
  phoneNumberField: LocatorConfig;
  companyNameField: LocatorConfig;
  countryField: LocatorConfig;
  submitBtn: LocatorConfig;
  ErrorMessagesList: LocatorConfig;
  dropDownCountry: LocatorConfig;
  dropdownAboutUs: LocatorConfig;
  checkBox: LocatorConfig;
}

export interface LandingPageLocators {
  contactUsButton: LocatorConfig;
  language: string;
}
