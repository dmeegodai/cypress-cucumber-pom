import dashboardPage from "../../support/objectPages/dashboardPage";

describe("Orange HRM POM Implementation for Dashbaord Page", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
  });

  describe("By using dropdown the user", () => {
    it("should able to log out", () => {
      dashboardPage.clickUserDropdown();
      dashboardPage.clickLogoutButton();
    });
  });
});
