module.exports = {
  preset: 'jest-playwright-preset',
  testEnvironmentOptions: {
    "jest-playwright": {
      browsers: ["chromium"],
      launchOptions: {
        headless: false,
      },
    },
  },
  testMatch: [
    '<rootDir>/src/**/pw.ui.test.{js,jsx,mjs}',
  ],
  testTimeout: 30000
};
