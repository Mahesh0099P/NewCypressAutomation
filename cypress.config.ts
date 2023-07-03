import cypress, { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'o16zn8',
  pageLoadTimeout:30000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern:['../cypress/e2e/1-getting-started','../cypress/e2e/2-advanced-examples'],
    baseUrl:"https://opensource-demo.orangehrmlive.com/",
  },
});
