#!/usr/bin/env node
const constants = require('../constants');
const cpx = require('cpx'); // eslint-disable-line import/no-extraneous-dependencies

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

if (ENV === constants.ENV.PROD) {
  cpx.copy(`${CWD}/src/components/**/*.html`, `${CWD}/dist/components`);
  // @todo: check if this is the proper place, or is the file name too specific?
  cpx.copy(`${CWD}/src/assets/**/*`, `${CWD}/dist/assets`);
} else {
  cpx.copy(`${CWD}/src/components/**/*.html`, `${CWD}/.tmp/components`);
  // @todo: check if this is the proper place, or is the file name too specific?
  cpx.copy(`${CWD}/src/assets/**/*`, `${CWD}/.tmp/assets`);
}
