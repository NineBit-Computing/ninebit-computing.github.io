describe("SaaS App Uptime Check", () => {
  it("should load login page successfully", () => {
    cy.visit("https://ciq.ninebit.in/login");
    cy.contains("Sign In").should("be.visible");
  });

  it("should allow login and load the dashboard", () => {
    cy.login("khushi.ojha@ninebit.in", "Norton@1234");

    // After login, check that a key dashboard element exists
    cy.contains("Home").should("be.visible");
  });
});
