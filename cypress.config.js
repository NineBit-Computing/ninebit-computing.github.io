// cypress.config.js
const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    env: {
      E2E_USER_PWD: process.env.E2E_USER_PWD,
    },
  },
});
