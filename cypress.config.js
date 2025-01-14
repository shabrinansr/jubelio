const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://v2.jubelio.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
