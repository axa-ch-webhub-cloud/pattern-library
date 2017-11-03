const constants = require('../constants');
const cpx = require("cpx");
const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

if (ENV === constants.ENV.PROD) {
  cpx.copy(`${CWD}/node_modules/webcomponents.js/webcomponents-lite.min.js`, `${CWD}/dist/app/webcomponents-lite.js`)
} else {
  cpx.copy(`${CWD}/node_modules/webcomponents.js/webcomponents-lite.js`, `${CWD}/dist/app/webcomponents-lite.js`)
}
