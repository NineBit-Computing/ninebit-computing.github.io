import { config } from 'dotenv';

config(); // Loads API key from .env if available


describe("SaaS App Uptime Check", () => {
  it("should load login page successfully", () => {
    cy.visit("https://ciq.ninebit.in/login");
    cy.contains("Sign In").should("be.visible");
  });

  it("should allow login and load the dashboard", () => {
    cy.login("testuser@example.com", "securePassword123");

    // After login, check that a key dashboard element exists
    cy.contains("Home").should("be.visible");
  });
});
