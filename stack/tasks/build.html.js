const constants = require('../constants');
const cpx = require("cpx");
const del = require('del');
const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

if (ENV === constants.ENV.PROD) {
  del.sync(['docs/**']);
  cpx.copy(`${CWD}/src/**/*.html`, `${CWD}/docs`)
}
