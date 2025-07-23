describe("Check NineBit Docs", () => {
  it("should load https://docs.ninebitciq.com/ and show expected content", () => {
    cy.visit("https://docs.ninebitciq.com/", { timeout: 30000 });
    cy.contains("Welcome to CIQ by NineBit").should("be.visible"); // change based on your actual content
    cy.screenshot("docs-homepage");
  });
});
