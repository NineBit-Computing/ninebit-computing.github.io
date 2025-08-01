it("should register a new user successfully", () => {
  cy.visit("https://console.ninebitciq.com/register");
  cy.contains("NineBit CIQ - Register").should("be.visible");

  cy.get('input[name="email"]').type("hrdesk@ninebit.in");
  cy.get('input[name="firstName"]').type("Hrdesk");
  cy.get('input[name="lastName"]').type("Ninebit");
  cy.get('input[name="password"]').type("Test@1234");
  cy.get('input[name="orgName"]').type("NineBit Computing");
  cy.get('button[type="submit"]').click();
  cy.screenshot('after-submit');
  cy.wait(10000); 
  cy.contains("Almost There!").should("be.visible"); 
  cy.screenshot('after-registration');

});
