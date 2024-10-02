Cypress.Commands.add("login", (username, password) => {
  cy.visit(Cypress.config("baseUrl"));
  cy.xpath("//input[@name='username']").type(username);
  cy.xpath("//input[@name='password']").type(password);
  cy.xpath(
    "//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']"
  ).click();
  cy.url().should("include", "/dashboard");
  cy.wait(4000);
});
