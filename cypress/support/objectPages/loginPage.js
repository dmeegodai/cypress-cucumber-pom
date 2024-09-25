class loginPage {
  elements = {
    usernameInput: () => cy.xpath("//input[@name='username']"),
    passwordInput: () => cy.xpath("//input[@name='password']"),
    loginButton: () => cy.get(".oxd-button"),
    warningMessage: () => cy.get(".oxd-alert"),
  };

  // defined methods
  typeusernameInput(username) {
    this.elements.usernameInput().type(username);
  }
  typepasswordInput(password) {
    this.elements.passwordInput().type(password);
  }
  clickloginButton() {
    this.elements.loginButton().click();
  }
  validateWarningMessage() {
    this.elements.warningMessage().should("have.text", "Invalid credentials");
  }
}

module.exports = new loginPage();
