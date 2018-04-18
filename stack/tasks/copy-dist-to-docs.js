const cpx = require('cpx'); // eslint-disable-line import/no-extraneous-dependencies

const CWD = process.cwd();

cpx.copy(`${CWD}/dist/**`, `${CWD}/docs`);
