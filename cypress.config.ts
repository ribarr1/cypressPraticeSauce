import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.experimentalStudio = false; // Desactiva grabación de eventos
      config.env.BACKTRACE_ENABLED = false; // Deshabilita Backtrace
      return config;
      // implement node event listeners here
    },
    video: false, // Opcional: Desactiva grabación de video
    screenshotOnRunFailure: false, // Opcional: Desactiva capturas en fallos
     baseUrl: 'https://www.saucedemo.com',
     specPattern: 'cypress/e2e/**/*.cy.ts'
  },
});
