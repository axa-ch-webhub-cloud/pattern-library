const constants = require('../constants');
const cpx = require('cpx'); // eslint-disable-line import/no-extraneous-dependencies

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

const copyAll = (to) => {
  cpx.copy(`${CWD}/node_modules/@webcomponents/custom-elements/src/native-shim.js`, `${CWD}/${to}/app`);
  cpx.copy(`${CWD}/node_modules/@webcomponents/custom-elements/custom-elements.min.js`, `${CWD}/${to}/app`);
  cpx.copy(`${CWD}/node_modules/webcomponents.js/webcomponents-lite.min.js`, `${CWD}/${to}/app`);
};

if (ENV === constants.ENV.PROD) {
  copyAll('dist');
} else {
  copyAll('.tmp');
}
