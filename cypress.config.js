const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
 
    baseUrl: 'https://tagger-ui-exp.theeye.io/',
    experimentalStudio: true,
    
    video: false,
    screenshotOnRunFailure: false,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
