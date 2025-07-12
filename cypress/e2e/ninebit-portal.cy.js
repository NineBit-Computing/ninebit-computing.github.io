describe("Company Website Uptime Check", () => {
  it("should load homepage and have correct title", () => {
    cy.visit("https://ninebit.in");
    cy.title().should("include", "NineBit CIQ");
  });
});
