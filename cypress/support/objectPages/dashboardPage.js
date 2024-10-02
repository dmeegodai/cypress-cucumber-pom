class dashboardPage {
    elements = {
        dashboardText: () => cy.contains('Dashboard'),
        userDropdown: () => cy.get('.oxd-userdropdown-name'),
        logoutOption: () => cy.get(':nth-child(4) > .oxd-userdropdown-link'),
        aboutOption: () => cy.get(':nth-child(1) > .oxd-userdropdown-link'),
        aboutPopup: () => cy.get('.orangehrm-modal-header > .oxd-text'),
        changePassword: () => cy.get(':nth-child(3) > .oxd-userdropdown-link'),
    };

    // defined methods
    validateDashboardText() {
        this.elements.dashboardText().should('have.text', 'Dashboard');
    }

    clickUserDropdown () {
        this.elements.userDropdown().click();
    }

    clickLogoutButton () {
        this.elements.logoutOption().click();
    }

    clickAboutButton () {
        this.elements.aboutOption().click();
    }

    validateAboutPopup () {
        this.elements.aboutPopup().should('have.text', 'About');
    }

    clickChangePasswordButton () {
        this.elements.changePassword().click();
    }

  
}

module.exports = new dashboardPage();