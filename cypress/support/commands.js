// cypress/support/commands.js

Cypress.Commands.add("login", (email, password) => {
  cy.intercept("POST", "/login").as("loginRequest");
  cy.visit("https://ciq.ninebit.in/login"); // Adjust path based on your app's login route

  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.screenshot();
  cy.get('button[type="submit"]').click();
  cy.url().then((url) => cy.log("Current URL:", url));

  cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);

  // Optional: Confirm login succeeded by checking for dashboard
  cy.url().should("include", "/dashboard");
  cy.screenshot();
});