import myinfoPage from "../../support/objectPages/myinfoPage";


describe("Orange HRM POM Implementation for My Info page", () =>{
    before(()=>{
        cy.login("Admin", "admin123");
    });

    describe("Navigate in to the My Info page", () =>{
        it("Should be able to click the My Info Text", () =>{
            myinfoPage.clickmyInfoText();
            myinfoPage.validatemyInfoPageVisit();
        })
    });

    describe("Personal details tab postive senario", () => {
        it("Should be able to fill complete name and submit", ()=>{
            cy.login("Admin", "admin123");
            cy.navigateToMyInfoTab();
            
        })
    })
    
});

