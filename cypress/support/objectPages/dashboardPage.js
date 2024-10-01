class dashboardPage {
    elements = {
        dashboardText: () => cy.contains('Dashboard'),
        userDropdown: () => cy.get('.oxd-userdropdown-name'),
        logoutOption: () => cy.get(':nth-child(4) > .oxd-userdropdown-link'),
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
}

module.exports = new dashboardPage();