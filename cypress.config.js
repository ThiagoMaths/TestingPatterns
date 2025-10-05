const {defineConfig} = require('cypress')

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',

    reporterOptions: {
        charts: true,
        reportDir: 'mochawesome-report',
        reportPageTitle: 'Relatório de Testes - EBAC Store',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    },

    e2e: {
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
        baseUrl: "http://lojaebac.ebaconline.art.br/",
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});