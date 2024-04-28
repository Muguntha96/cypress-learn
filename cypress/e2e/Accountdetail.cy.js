describe("check the system login functio", function () {
  it("open the application", function () {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("input[type='text']").type("Muguntha");
    cy.get("input[type='password']").type("Muguntha");
    cy.get("input[type='submit']").click();
    cy.get(
      "#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a"
    ).click();
    cy.get("select[id='month']").select("May");
    cy.get("#transactionType").select(2);
    cy.get("input[type='submit']").click();
  });
});
