it("should successfully submit the Contact Us form", () => {
  cy.visit("https://ninebit.in/contact");

  cy.contains("We’d love to hear from you").should("be.visible");

  cy.get('input[name="firstName"]').type("Hrdesk");
  cy.get('input[name="lastName"]').type("Ninebit");
  cy.get('input[name="email"]').type("hrdesk@ninebit.in");
  cy.get('input[aria-label="Organization name"]').type("NineBit Computing");
  cy.get('textarea[name="message"]').type("Hi team, I would like to know more about CIQ's automation features.");
  cy.get('button[type="submit"]').click();

  cy.contains("Form submitted sucessfully!").should("be.visible");
});

