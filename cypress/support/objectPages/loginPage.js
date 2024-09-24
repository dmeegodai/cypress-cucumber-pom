class loginPage {
  elements = {
    usernameInput: () => cy.xpath("//input[@name='username']"),
    passwordInput: () => cy.xpath("//input[@name='password']"),
    loginButton: () => cy.get(".oxd-button"),
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
}

module.exports = new loginPage();
