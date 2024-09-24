/// <reference types="cypress"/>
import loginPage from "../../support/objectPages/loginPage";
import dashboardPage from "../../support/objectPages/dashboardPage" ;


describe("Orange HRM POM Implementation", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl"));
  });

  describe("Admin login positive test scenario", ()=>{
    it("Should login succsessfully", ()=>{
      loginPage.typeusernameInput('Admin');
      loginPage.typepasswordInput('admin123');
      loginPage.clickloginButton(); 
      dashboardPage.validateDashboardText();
    });
  });
 
});
