describe("Check tabs", () => {
  before(() => {
    cy.login();
  });
  after(() => {
    cy.logout();
  });

  const tabs = [
    { name: " Opłaty automatyczne " },
    { name: " Lista transakcji " },
    { name: " Formy płatności " },
    { name: " Ustawienia i dane konta ", class: "account-wrapper" },
  ];
  it(`Check number of tabs.`, () => {
    cy.checkNumberOfTabs();
  });
  tabs.forEach((tab) => {
    it(`Check tab [${tab.name}] is on the panel enabled`, () => {
      cy.getTab(tab.name).then(($tab) => {
        expect($tab.is(":visible")).equal(true);
      });
    });
  });
  tabs.reverse().forEach((tab) => {
    it(`Go to tab [${tab.name}] and check loading.`, () => {
      cy.getTab(tab.name).click();
      cy.getLoadingsMask().should("be.visible");
      cy.getContent().should("be.visible");
      cy.getLoadingsMask().should("not.exist");
    });
  });
});
