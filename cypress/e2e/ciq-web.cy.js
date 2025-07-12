import { config } from 'dotenv';

config(); // Loads API key from .env if available


describe("SaaS App Uptime Check", () => {
  it("should load login page successfully", () => {
    cy.visit("https://ciq.ninebit.in/login");
    cy.contains("Sign In").should("be.visible");
  });

  it("should allow login and load the dashboard", () => {
    cy.login("support@ninebit.in", process.env.E2E_USER_PWD);


    // After login, check that a key dashboard element exists
    cy.contains("Home").should("be.visible");
  });
});
