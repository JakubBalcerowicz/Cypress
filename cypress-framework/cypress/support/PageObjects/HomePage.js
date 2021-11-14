class HomePage {
  getPaymentsTab() {
    return cy.xpath("//div/a[contains(text(), ' Opłaty automatyczne ' )]");
  }

  getTransactionsTab() {
    return cy.xpath("//div/a[contains(text(), '  Lista transakcji  ' )]");
  }

  getPaymentFormsTab() {
    return cy.xpath("//div/a[contains(text(), '  Formy płatności  ' )]");
  }

  getSettingsTab() {
    return cy.xpath(
      "//div/a[contains(text(), '  Ustawienia i dane konta  ' )]"
    );
  }
}

export default HomePage;
