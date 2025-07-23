describe("External Link Availability Check", () => {
  const urlsToCheck = [
    'https://docs.ninebitciq.com/',
    'https://ninebitciq.com',
    'https://www.ninebitciq.com',
    'https://ninebit.in',
    'https://www.ninebit.in'
  ];

  urlsToCheck.forEach((url) => {
    it(`should load ${url} and contain expected content`, () => {
      cy.visit(url); 
      if (url.includes('docs')) {
        cy.contains("Welcome to CIQ by NineBit").should("be.visible"); // adjust to your docs homepage
      } else {
        cy.contains("NineBit CIQ: Rapid Prototyping Platform for AI/ML").should("be.visible"); // general fallback
      }

      cy.screenshot(`loaded-${new URL(url).hostname}`);
    });
  });
});
