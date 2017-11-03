const constants = require('../constants');
const cpx = require("cpx");
const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

if (ENV === constants.ENV.PROD) {
  cpx.copy(`${CWD}/src/**/*.html`, `${CWD}/dist`)
} else {
  cpx.copy(`${CWD}/src/**/*.html`, `${CWD}/.tmp`)
}
