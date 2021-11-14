describe("Check tabs", () => {
  before(() => {
    cy.login();
  });
  after(() => {
    cy.logout();
  });

    it(`Check if panel bar got all tabs.`, () => {
      cy.checkNumberOfTabs()
    });
});
