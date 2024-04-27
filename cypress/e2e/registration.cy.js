describe("Bank Registration", function () {
  it("Regidter the Account", function () {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("#loginPanel > p:nth-child(3) > a").click();
    cy.get('#customer\\.firstName').type("Mugntha");
    cy.get('#customer\\.lastName').type("Durairaj");
    cy.get('#customer\\.address\\.street').type("456 Westland Dr")
    cy.get('#customer\\.address\\.city').type("Halax")
    cy.get('#customer\\.address\\.state').type("NS")
    cy.get('#customer\\.address\\.zipCode').type("B3S4 1P84")
    
    cy.get('#customer\\.ssn').type('RCV')
    cy.get('#customer\\.username').type("Muguntha")
    cy.get('#customer\\.password').type("Muguntha")
    cy.get('#repeatedPassword').type("Muguntha")
    
    cy.get('[colspan="2"] > .button').click()
  });
});
