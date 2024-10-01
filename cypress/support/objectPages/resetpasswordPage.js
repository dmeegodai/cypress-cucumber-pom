class resetPassword {
  elements = {
    resetPasswordTitle: () =>
      cy.xpath(
        "//h6[@class='oxd-text oxd-text--h6 orangehrm-forgot-password-title']"
      ),
    userNameFeild: () =>
      cy.xpath("//input[@class='oxd-input oxd-input--active']"),
    resetPasswordButton: () => cy.get(".oxd-button--secondary"),
    resetPasswordSuccsessTitle: () => cy.get(".oxd-text--h6"),
  };

  // defined methods
  validateRestPasswordTitle() {
    this.elements
      .resetPasswordTitle()
      .should("have.text", "Reset Password")
      .and("be.visible");
  }

  enterAdminUserName(username) {
    this.elements.userNameFeild().type(username);
  }

  clickResetPassword() {
    this.elements.resetPasswordButton().click();
  }

  validateResetSuccessTitle() {
    this.elements
      .resetPasswordSuccsessTitle()
      .should("be.visible")
      .and("have.text", "Reset Password link sent successfully");
  }
}

module.exports = new resetPassword();
