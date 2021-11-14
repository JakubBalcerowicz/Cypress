import HomePage from "./PageObjects/HomePage";

Cypress.Commands.add("login", () => {
  cy.visit("https://app.bluemedia.pl/logowanie");
  cy.get("#email").type("rekrutacja-cypress1@bm.pl");
  cy.get(".bm-button").contains("Dalej").click();
  cy.get("#password").type("Qwerty12");
  cy.get(".bm-button").contains("Zaloguj się").click();
});

Cypress.Commands.add("getHrefFromIcon", (index) => {
  cy.getIcons()
    .eq(index)
    .children()
    .should("have.attr", "href")
    .then((href) => href);
});

Cypress.Commands.add("logout", () => {
  cy.getLogoutButton().click();
});

Cypress.Commands.add("checkNumberOfTabs", () => {
  const homePage = new HomePage();
  homePage.checkNumberOfTabs();
});

Cypress.Commands.add("getLogoutButton", () => {
  return cy.xpath(
    "//div[@class = \"user-menu ng-tns-c99-0\"]/a[contains(text(), 'Wyloguj')]"
  );
});

Cypress.Commands.add("getIcons", () => {
  return cy.get("ul").children();
});

Cypress.Commands.add("checkNumberOfTabs", () => {
  cy.xpath(" //div[@class = 'ng-tns-c99-0 ng-star-inserted']/a").should(
      "have.length",
      5
  );
  cy.xpath(
      "//div[@class = 'ng-tns-c99-0 ng-star-inserted']/a/parent::div"
  )
      .children()
      .then((tabs) => {
        expect(tabs.length).equal(5);
      });
});




