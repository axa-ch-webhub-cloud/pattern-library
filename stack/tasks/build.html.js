const constants = require('../constants');
const cpx = require('cpx'); // eslint-disable-line import/no-extraneous-dependencies

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

if (ENV === constants.ENV.PROD) {
  cpx.copy(`${CWD}/src/components/**/*.html`, `${CWD}/dist/components`);
} else {
  cpx.copy(`${CWD}/src/components/**/*.html`, `${CWD}/.tmp/components`);
}
