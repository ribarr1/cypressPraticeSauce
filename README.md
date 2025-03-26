Cypress Practice for SauceDemo

This project contains automated end-to-end tests using Cypress and TypeScript for the SauceDemo website. The goal is to demonstrate proficiency in writing and executing automated UI tests.

📦 Project Structure

cypress/e2e: Contains test files.

cypress/fixtures: Stores test data (e.g., validUsers.json).

cypress/pages: Page Object Model (POM) for better maintainability.

cypress/support: Custom commands and utilities.

🛠 Prerequisites

Ensure you have the following installed:

Node.js (LTS version recommended)

npm or yarn

Cypress

🚀 Installation

Clone the repository:

git clone https://github.com/ribarr1/cypressPraticeSauce.git

Navigate to the project directory:

cd cypressPraticeSauce

Install dependencies:

npm install

🧪 Running Tests

To open the Cypress GUI:

npx cypress open

To run tests in headless mode:

npx cypress run

To run specific test files:

npx cypress run --spec "cypress/e2e/filename.cy.ts"

🛡 Custom Commands

This project uses custom commands defined in cypress/support/commands.ts.
Examples include:

cy.escribir(selector, data) - Custom command for typing.

cy.makeClick(selector) - Custom command for clicking.

🧑‍💻 Environment Configuration

Ensure you have a cypress.config.ts file with the appropriate base URL:

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com'
  }
});

🛎 Additional Notes

Data for tests is stored in cypress/fixtures/validUsers.json.

Page objects are organized under cypress/pages/selectors.ts.

Use .only or .skip to filter specific tests during development.

🤝 Contributing

Contributions are welcome! Please fork the repository, create a branch, and submit a pull request.
