const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
      cypressSplit(on, config);

      return config;
    },

    specPattern: "cypress/integration/**/*.feature",
  },
});
