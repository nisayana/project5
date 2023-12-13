# Project5 - Pagination
This project utilizes Cypress and Cucumber to automate end-to-end (E2E) testing for web applications, leveraging the benefits of BDD (Behavior-Driven Development).

Features:

Write test scenarios in readable and maintainable Gherkin syntax.
Leverage Cypress's powerful testing framework for interacting with the web page.
Enjoy the benefits of BDD like clear communication, collaboration, and focus on user behavior.

Prerequisites:
Node.js and npm installed
Cypress and Gherkin

## Installation

To install this project, follow these steps:

1. Create a folder <mkdir project_name>
2. Initialize NPM  to manage Cypress as a project dependency <npm init -y>
3. Install cypress using npm. This will download Cypress and save it 
as a devDependency in your project <npm install cypress --save-dev>
4. To run a project <npx cypress open>

## To install Cucumber

1. <npm install --save-dev  @badeball/cypress-cucumber-preprocessor> to use Cypress with Cucumber
2. use this link for installation instructions https://github.com/badeball/cypress-cucumber-preprocessor
3. copy "Example setup" from https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/quick-start.md to cypress.config.ts (chagne configuration file to .ts)
4. to solve errors install these dependencies <npm install --save-dev @bahmutov/cypress-esbuild-preprocessor>, <npm install -D ts-node>
5. to solve compiler issue, refer to this link <https://github.com/badeball/cypress-cucumber-preprocessor/blob/master/docs/faq.md>
6. to solve edModuleInterop add <esModuleInterop: true> to tsconfig.json
7. install Cucumber (Gherkin) Full Support extension
8. change setting.json file to add "cucumberautocomplete.steps": ["cypress/e2e/steps-definitions/*.js"]
9. add "cypress-cucumber-preprocessor": {"stepDefinitions": "cypress/e2e/step-definitions/*.js"} into package.json file
10. npm install eslint --save-dev
11. create folders features, pages, step-definitions
    
