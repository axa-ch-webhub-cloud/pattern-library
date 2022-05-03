// e.g. invoke like this:
// npm run debug-playwright -- src/components/20-molecules/datepicker/pw.ui.test.js
module.exports = {
  preset: 'jest-playwright-preset',
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium'],
      launchOptions: {
        headless: false,
      },
    },
  },
  testMatch: ['<rootDir>/src/**/pw.ui.test.{js,jsx,mjs}'],
  testTimeout: 999999999,
};
