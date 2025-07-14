describe("SaaS App Uptime Check", () => {
  it("should load login page successfully", () => {
    cy.visit("https://ciq.ninebit.in/login");
    cy.contains("Sign In").should("be.visible");
  });

  it("should allow login and load the dashboard", () => {
    const password = Cypress.env("E2E_USER_PWD");
    cy.login("support@ninebit.in", password);

    // After login, check that a key dashboard element exists
    cy.contains("CIQ API Key").should("be.visible");
    cy.contains("CIQ API Key")
      .next() // gets the next sibling (you can also use .parent().find(...) if needed)
      .invoke("text")
      .should("have.length", 36);
  });
});