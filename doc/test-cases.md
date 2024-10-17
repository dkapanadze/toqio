# Test Case: TC-001 - Verify Required Field Validation on Contact Page

## Description:

Ensure that all required fields on the contact page display appropriate validation errors when an empty form is submitted.

### Preconditions:

- The production environment is accessible.
- The new version has been deployed.

### Test Steps:

1. Navigate to the landing page of the production website.
2. Click on the "Contact Us" button to navigate to the contact page.
3. Attempt to submit the contact form without filling in any fields.
4. Verify that appropriate error messages are displayed for each required field.

### Expected Results:

- All required fields display validation error messages indicating that they cannot be left empty.
- The error messages are consistent and clear, matching the expected error message for required fields.

---

# Test Case: TC-002 - Verify Validation of Invalid Inputs on Contact Page

## Description:

Ensure that the contact form correctly validates and displays error messages for invalid mobile numbers and email addresses.

### Preconditions:

- The production environment is accessible.
- The new version has been deployed.

### Test Steps:

1. Navigate to the landing page of the production website.
2. Click on the "Contact Us" button to navigate to the contact page.
3. Fill in the form with valid names and company details but enter invalid data for mobile number and email.
4. Click the submit button.
5. Verify that the appropriate error messages are displayed for the mobile number and email fields.

### Expected Results:

- The mobile number field displays a validation error indicating an incorrect format.
- The email field displays a validation error indicating that the provided email is not valid.

---

# Test Case: TC-003 - Verify Successful Form Submission with Valid Data

## Description:

Ensure that the contact form submits successfully with valid credentials.

### Preconditions:

- The production environment is accessible.
- The new version has been deployed.

### Test Steps:

1. Navigate to the landing page of the production website.
2. Click on the "Contact Us" button to navigate to the contact page.
3. Fill in the form with valid names, company details, a valid email address, and a valid mobile number.
4. Click the required checkbox (if applicable).
5. Click the submit button.

### Expected Results:

- The form is submitted successfully without any validation errors.
- The user is redirected to a confirmation page or receives a success message.

---

# Test Case: TC-003 - Verify Desktop Navigation to All Menu Items

## Description:

Ensure that all items in the navigation menu are clickable and lead to the correct URLs on the desktop version of the website.

### Preconditions:

- The landing page of the website is accessible.

### Test Steps:

1. For each item in the navigation menu:
   - If the item has no parent, get the navigation item directly.
   - If the item has a parent, hover over the parent item to reveal the submenu.
   - Click on the navigation item.
2. Verify that the current page URL contains the expected URL segment corresponding to the clicked menu item.
   Expected Results:
   Each menu item should navigate to the correct page, as indicated by the URL containing the expected segment.

### Expected Results:

- Each menu item should navigate to the correct page, as indicated by the URL containing the expected segment.

---

# Test Case: TC-004 - Verify Burger Menu Functionality on Tablet View

## Description:

Ensure that the burger menu works correctly on smaller viewports and allows navigation to all menu items.

### Preconditions:

- The landing page of the website is accessible.
- The browser viewport is set to tablet size (800x600).

### Test Steps:

1. Set the viewport size to 800x600 pixels.
2. Click the burger menu to expand it.
3. For each item in the navigation menu:
   - Click on the menu item to navigate.
   - Verify that the current page URL contains the expected URL segment corresponding to the clicked menu item.
   - Reopen the burger menu for subsequent items.

### Expected Results:

- Each menu item should navigate to the correct page without any issues, and the URL should contain the expected segment after each navigation.

---

# Test Case: TC-005 - Verify Image Loading on the Landing Page

## Description:

This test case verifies that all images on the landing page load correctly by checking their HTTP response status. It ensures that the images have valid src attributes and that the server responds with a status code of 200 for each image.

### Preconditions:

- The landing page is accessible.
- The Playwright test environment is properly configured.

### Test Steps:

1. Navigate to the Landing Page: Load the landing page using the base URL.
2. Locate Image Elements: Select all img elements on the page.
3. Count Images: Get the total count of image elements.
   - Verify Image Count: Assert that there is at least one image present on the page.
4. Loop Through Images:
   - For each image element:
     - Retrieve the src attribute.
     - Check Validity of src:
       - If src is valid (not null or empty):
         - Send an HTTP GET request to the image URL.
         - Verify HTTP Response: Assert that the response status code is 200.
       - If src is invalid:
         - Log a warning indicating that the image source is not valid.

### Expected Results:

- All images should have valid src attributes.
- Each image URL should return a response status of 200, indicating successful loading.
- Any issues with image loading (invalid src or non-200 response) should be logged for review.

### Logging and Output:

- The test will output the total number of images found.
- For each image that fails to load or has an invalid src, appropriate warning or error messages will be logged to the console.

---

# Test Case: TC-005 - Verify Link Status on the Landing Page

## Description:

This test case verifies the status of all links present on the landing page. It ensures that each link is accessible and returns a status code less than 400, indicating that they are functioning correctly.

### Preconditions:

- The landing page is accessible.
- The Playwright test environment is properly configured.

### Test Steps:

1. Navigate to the Landing Page: Load the landing page using the base URL, waiting until the DOM is fully loaded.
2. Extract Links: Use the utility function to extract all link (<a> tag) URLs from the page.
3. Initialize Results Array: Create an array to store the link status results.
4. Loop Through Links:
   - For each link:
     - Check if the link is an absolute URL (contains "http").
     - Use the utility function to check the link's status.
     - Store the link and its corresponding status in the results array.
5. Log Link Status: Output a summary report of the link statuses.

### Expected Results:

- Each link should return a status code less than 400, indicating that the link is valid and accessible.
- If any link returns a status of 400 or greater, the test will fail, and the corresponding link will be logged.

### Logging and Output:

- The test will log a status report for each link checked, displaying the link and its HTTP status code.
- For any links that do not meet the status requirement, the test will throw an assertion error.
