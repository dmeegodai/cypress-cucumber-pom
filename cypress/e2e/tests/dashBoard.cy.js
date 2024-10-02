import dashboardPage from "../../support/objectPages/dashboardPage";
import updatepasswordPage from "../../support/objectPages/updatepasswordPage";

describe("Orange HRM POM Implementation for Dashbaord Page", () => {
  beforeEach(() => {
    cy.login("Admin", "admin123");
  });

  describe("By using dropdown the user", () => {
    it("should able to log out", () => {
      dashboardPage.clickUserDropdown();
      dashboardPage.clickLogoutButton();
    });

    it("Should display 'About' alert", () =>{
      dashboardPage.clickUserDropdown();
      dashboardPage.clickAboutButton();
      dashboardPage.validateAboutPopup();
    })

    it("Should able to change password", () =>{
      dashboardPage.clickUserDropdown();
      dashboardPage.clickChangePasswordButton();
      updatepasswordPage.validateUpdatePasswordTitle();
      updatepasswordPage.enterCurrentPassword("admin123");
      updatepasswordPage.enterUpdatedPassword("admin1234");
      updatepasswordPage.confirmUpdatedPassword("admin1234");
      updatepasswordPage.clickSaveButton();
      updatepasswordPage.validateSuccsessMessage();
    })
  });
});
