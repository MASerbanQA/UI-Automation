const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth:1920,
  video:true,
  videoCompression:1,
  videoRecordingPath: '\ComponentTesting\ComponentTesting\cypress\videos',
  env: {
    username: "CyTest@test.com",
    password: "CYtest33"
  },
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
})
