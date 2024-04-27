describe("existing user tries re-Registration", function () {
  it("existing User tries to re-register", function () {
    cy.visit("https://parabank.parasoft.com/parabank/index.htm");
    cy.get("#loginPanel > p:nth-child(3) > a").click();
    cy.get("input[id='customer.firstName']").type("Mugntha");
    cy.get("input[id='customer.lastName']").type("Durairaj");
    cy.get("input[id='customer.address.street']").type("456 Westland Dr");
    cy.get("input[id='customer.address.city']").type("Halax");
    cy.get("#customer\\.address\\.state").type("NS");
    cy.get("#customer\\.address\\.zipCode").type("B3S4 1P84");
    cy.get("#customer\\.ssn").type("RCV");
    cy.get("#customer\\.username").type("Muguntha");
    cy.get("#customer\\.password").type("Muguntha");
    cy.get("#repeatedPassword").type("Muguntha");
    cy.get('[colspan="2"] > .button').click();
    cy.get("span[id='customer.username.errors']").should('have.text',"This username already exists.")
    
  });
});
