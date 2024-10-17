## Playwright Tests

This project contains automated end-to-end tests using Playwright. Follow the instructions below to set up the environment and run the test

Prerequisites
Docker installed on your machine

1. Clone the Repository

   - Open your terminal and run the following command to clone the repository:
   - git clone `https://github.com/your-username/your-repository.git`

2. Navigate to the Project Directory

   - cd --project-directory--

3. build docker

- docker build -t playwright-tests .

4. run tests

- docker run --rm -it playwright-tests

5. View Test Results
   - Once the tests have completed, you will see the output in the terminal. Review the results to ensure all tests pass.

## Alternatively you can run tests without docker

- cd --project-directory--
- npm install
- npm run test

## Project structure

- src/
  - data/
    - contactUsData.json
    - errorMessages.ts
    - menuItems.ts
  - fixtures/
    - contact-us.fixture.ts
    - navigation.fixture.ts
  - locators/
    - contactPageLocators.ts
    - landingPageLocators.ts
  - pages/
    - contactPage.ts
    - landingPage.ts
    - POManager.ts
  - tests/
    - TC-001-002-003-contact-form-validation.spec.ts
    - TC-004-005-navigational-tests.spec.ts
    - TC-006-image-loading.spec.ts
    - TC-007-link-status.spec.ts
  - types/
    - contact-page.interface.ts
    - landing-page.interface.ts
    - locators.interface.ts
  - utils/
    - checkLinkStatus.ts
    - extractLinks.ts
    - validateErrorMessage.ts
