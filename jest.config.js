module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/stack/jest/setupTests.js',
  testMatch: [
    '<rootDir>/src/**/?(*.)(test).{js,jsx,mjs}',
  ],
  transform: {
    '^.+\\.css$': '<rootDir>/stack/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/stack/jest/fileTransform.js',
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
  ],
};
