module.exports = {
  preset: 'jest-playwright-preset',
  testMatch: [
    '<rootDir>/src/**/pw.ui.test.{js,jsx,mjs}',
  ],
  testTimeout: 15000
};
