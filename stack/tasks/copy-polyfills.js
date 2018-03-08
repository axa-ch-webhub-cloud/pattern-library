#!/usr/bin/env node
const constants = require('../constants');
const cpx = require('cpx'); // eslint-disable-line import/no-extraneous-dependencies

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

const copyAll = (to) => {
  const wcPath = 'node_modules/@webcomponents/webcomponentsjs';
  cpx.copy(`${CWD}/${wcPath}/webcomponents-hi.js`, `${CWD}/${to}/app`);
  cpx.copy(`${CWD}/${wcPath}/webcomponents-hi-ce.js`, `${CWD}/${to}/app`);
  cpx.copy(`${CWD}/${wcPath}/webcomponents-hi-sd-ce.js`, `${CWD}/${to}/app`);
  cpx.copy(`${CWD}/${wcPath}/webcomponents-sd-ce.js`, `${CWD}/${to}/app`);
  cpx.copy(`${CWD}/${wcPath}/webcomponents-lite.js`, `${CWD}/${to}/app`);
  cpx.copy(`${CWD}/${wcPath}/webcomponents-loader.js`, `${CWD}/${to}/app`);
};

if (ENV === constants.ENV.PROD) {
  copyAll('dist');
} else {
  copyAll('.tmp');
}
