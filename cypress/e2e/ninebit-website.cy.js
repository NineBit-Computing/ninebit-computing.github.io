describe("External Website Availability Checks", () => {
  it("should load https://docs.ninebitciq.com/ and contain 'Welcome to CIQ by NineBit'", () => {
    cy.visit("https://docs.ninebitciq.com/");
    cy.title().should(
      "eq",
      "CIQ by NineBit — LLP Orchestration Platform | NineBit CIQ Docs",
    );
    cy.screenshot("docs-navigated");
  });

  it("should load https://ninebitciq.com and contain 'NineBit CIQ: Rapid Prototyping Platform for AI/ML'", () => {
    cy.visit("https://ninebitciq.com");
    cy.title().should(
      "eq",
      "Private LLM Development Platform for AI & ML | NineBit CIQ",
    );
    cy.screenshot("ninebitciq-navigated");
  });

  it("should load https://www.ninebitciq.com and contain 'NineBit CIQ: Rapid Prototyping Platform for AI/ML'", () => {
    cy.visit("https://www.ninebitciq.com");
    cy.title().should(
      "eq",
      "Private LLM Development Platform for AI & ML | NineBit CIQ",
    );
    cy.screenshot("www-ninebitciq-navigated");
  });

  it("should load https://ninebit.in and contain 'NineBit CIQ: Rapid Prototyping Platform for AI/ML'", () => {
    cy.visit("https://ninebit.in");
    cy.title().should(
      "eq",
      "Private LLM Development Platform for AI & ML | NineBit CIQ",
    );
    cy.screenshot("ninebit-in-navigated");
  });

  it("should load https://www.ninebit.in and contain 'NineBit CIQ: Rapid Prototyping Platform for AI/ML'", () => {
    cy.visit("https://www.ninebit.in");
    cy.title().should(
      "eq",
      "Private LLM Development Platform for AI & ML | NineBit CIQ",
    );
    cy.screenshot("www-ninebit-in-navigated");
  });
});
