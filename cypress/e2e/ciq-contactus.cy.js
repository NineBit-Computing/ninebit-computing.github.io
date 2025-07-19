it("should successfully submit the Contact Us form", () => {
  cy.visit("https://ninebit.in/contact");

  cy.contains("We’d love to hear from you").should("be.visible");

  cy.get('input[name="customerName"]').type("Hrdesk Ninebit");
  cy.get('input[aria-label="Organization name"]').type("NineBit Computing");
  cy.get('input[name="customerEmail"]').type("hrdesk@ninebit.in");
  cy.get('input[name="customerPhone"]').type("1234567890");
  cy.get('textarea[name="customerMsg"]').type("Hi team, I would like to know more about CIQ's automation features.");
  cy.get('button[type="submit"]').click();

  cy.contains("Form submitted sucessfully!").should("be.visible");
});

