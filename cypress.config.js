const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    dashboardUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    viewportHeight: 768,
    viewportWidth: 1366,
  },
});
