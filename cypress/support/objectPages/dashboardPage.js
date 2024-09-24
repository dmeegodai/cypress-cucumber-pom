class dashboardPage {
    elements = {
        dashboardText: () => cy.contains('Dashboard')
    };

    // defined methods
    validateDashboardText() {
        this.elements.dashboardText().should('have.text', 'Dashboard');
    }
}

module.exports = new dashboardPage();