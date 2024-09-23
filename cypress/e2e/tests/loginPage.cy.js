/// <reference types="cypress"/>

describe("Orange HRM POM Testing", () => {
  it("Page Login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.xpath("//input[@name='username']").should("be.visible");

    cy.xpath("//input[@name='username']").type("Admin");
    cy.xpath("//input[@name='password']").type("admin123");
    cy.get(".oxd-button").click();
    cy.contains("Dashboard").should("be.visible");
  });
});

