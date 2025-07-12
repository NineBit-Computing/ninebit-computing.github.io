// cypress/support/e2e.js
import "./commands"; // Import custom commands

// Optional: Catch uncaught exceptions and prevent test failure
Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // prevents Cypress from failing the test
});
