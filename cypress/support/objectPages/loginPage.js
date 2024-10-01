class loginPage {
  elements = {
    usernameInput: () => cy.xpath("//input[@name='username']"),
    passwordInput: () => cy.xpath("//input[@name='password']"),
    loginButton: () => cy.get(".oxd-button"),
    warningMessage: () => cy.get(".oxd-alert"),
    emptyUsernameMessage: () =>
      cy.xpath(
        "(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'])[1]"
      ),
    emptyPasswordMessage: () =>
      cy.xpath(
        "(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'])[2]"
      ),
    forgotPasswordButton: () => cy.get(".orangehrm-login-forgot > .oxd-text"),
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
  validateEmptyWarningMessage() {
    this.elements.emptyUsernameMessage().should("have.text", "Required");
    this.elements.emptyPasswordMessage().should("have.text", "Required");
  }
  clickForgotPasswordButton() {
    this.elements.forgotPasswordButton().click();
  }
}

module.exports = new loginPage();
