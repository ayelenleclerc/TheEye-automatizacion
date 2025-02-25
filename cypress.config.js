const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    viewportWidth: 1200,
    viewportHeight: 800,
 
    baseUrl: 'https://tagger-ui-dev.theeye.io/',
    experimentalStudio: true,
    
    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
