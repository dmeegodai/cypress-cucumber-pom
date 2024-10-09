class myinfoPage {
  elements = {
    myinfoText: () => cy.get(":nth-child(6) > .oxd-main-menu-item > .oxd-text"),
    persoanlDetailTest: () =>
      cy.get(
        ".orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6"
      ),
    employeeFirstName: () => cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'),
    employeeMiddleName: cy.get(':nth-child(2) > :nth-child(2) > .oxd-input'),
    employeeLastName:cy.get(':nth-child(3) > :nth-child(2) > .oxd-input'),
  };

  // defined methods
  clickmyInfoText() {
    this.elements.myinfoText().click();
  }
  validatemyInfoPageVisit() {
    this.elements.persoanlDetailTest ().should("have.text", "Personal Details");
  }
  enterUserFirstName(fName) {
    this.elements.employeeFirstName.clear().type(fname);
  }
}

module.exports = new myinfoPage();
