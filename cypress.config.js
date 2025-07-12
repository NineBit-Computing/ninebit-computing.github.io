const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Optional; you can override per test
    supportFile: "cypress/support/e2e.js",
  },
});
