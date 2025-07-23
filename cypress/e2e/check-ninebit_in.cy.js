describe("Check NineBit Docs", () => {
  it("should load https://docs.ninebitciq.com/ and show expected content", () => {
    cy.visit("https://ninebit.in/", { timeout: 30000 });
    cy.contains("Explore CIQ").should("be.visible"); // change based on your actual content
    cy.screenshot("ninebit_in-homepage");
  });
});
