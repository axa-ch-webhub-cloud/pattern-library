const path = require('path');

const { gatherAllVersions } = require(path.resolve(__dirname, 'scripts', 'build', 'version_info.js'));
const stringifiedVersionInfo = gatherAllVersions(path.resolve(__dirname));

module.exports = {
  globals: {'__VERSION_INFO__': JSON.parse(stringifiedVersionInfo)},
  testMatch: [
    '<rootDir>/src/**/pw.ui.test.{js,jsx,mjs}',
  ],
};
