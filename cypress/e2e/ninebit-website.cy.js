describe("External Website Availability Checks", () => {
  
  it("should load https://docs.ninebitciq.com/ and contain 'Welcome to CIQ by NineBit'", () => {
    cy.visit("https://docs.ninebitciq.com/");
    cy.contains("Welcome to CIQ by NineBit").should("be.visible");
    cy.screenshot("docs-navigated");
  });

  it("should load https://ninebitciq.com and contain 'NineBit CIQ: Rapid Prototyping Platform for AI/ML'", () => {
    cy.visit("https://ninebitciq.com", { timeout: 30000 });
    cy.contains("NineBit CIQ: Rapid Prototyping Platform for AI/ML").should("be.visible");
    cy.screenshot("ninebitciq-navigated");
  });

  it("should load https://www.ninebitciq.com and contain 'NineBit CIQ: Rapid Prototyping Platform for AI/ML'", () => {
    cy.visit("https://www.ninebitciq.com");
    cy.contains("NineBit CIQ: Rapid Prototyping Platform for AI/ML").should("be.visible");
    cy.screenshot("www-ninebitciq-navigated");
  });

  it("should load https://ninebit.in and contain 'NineBit CIQ: Rapid Prototyping Platform for AI/ML'", () => {
    cy.visit("https://ninebit.in", { timeout: 30000 });
    cy.contains("NineBit CIQ: Rapid Prototyping Platform for AI/ML").should("be.visible");
    cy.screenshot("ninebit-in-navigated");
  });

  it("should load https://www.ninebit.in and contain 'NineBit CIQ: Rapid Prototyping Platform for AI/ML'", () => {
    cy.visit("https://www.ninebit.in", { timeout: 30000 });
    cy.contains("NineBit CIQ: Rapid Prototyping Platform for AI/ML").should("be.visible");
    cy.screenshot("www-ninebit-in-navigated");
  });

});
