describe("Check icons", () => {
  before(() => {
    cy.login();
  });
  after(() => {
    cy.logout();
  });

  const links = [
    { name: "VECTRA", url: "https://ebok.vectra.pl/#/login" },
    { name: "UPC", url: "https://www.upc.pl/sign-in/" },
    { name: "INNOGY", url: "https://moje.innogy.pl/Logowanie" },
    {
      name: "PGE",
      url: "https://ebok.gkpge.pl/ebok/faces/profil/logowanie.xhtml",
    },
  ];
  links.forEach((link, index) => {
    it(`Check icons of ${link.name} is visible.`, () => {
      cy.getIcons()
        .eq(index)
        .contains(link.name)
        .then(($icon) => {
          expect($icon.is(":visible")).equal(true);
        });
    });
    it(`Check link of ${link.name} is correct.`, () => {
      cy.getHrefFromIcon(index).then((value) => expect(value).equal(link.url));
    });
  });
});
