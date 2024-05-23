const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const fs = require("fs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      on("file:preprocessor", cucumber());
      return config;
    },
    "mailHogUrl": "http://localhost:8090/",
    specPattern: "cypress/features/**/*.feature",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "results/Cypress-Testes-QA-[hash].xml",
      attachments: true,
      attachmentsPath: "./cypress/screenshots",
    },
    retries: 1,
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 5000,
    requestTimeout: 5000
  }
});
