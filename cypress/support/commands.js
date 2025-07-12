// cypress/support/commands.js

Cypress.Commands.add("login", (email, password) => {
  cy.visit("https://ciq.ninebit.in/login"); // Adjust path based on your app's login route

  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();

  // Optional: Confirm login succeeded by checking for dashboard
  cy.url().should("include", "/dashboard");
});
