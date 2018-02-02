// const multiEntry = require('rollup-plugin-multi-entry');
const resolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');

const constants = require('../../constants');

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

module.exports = {
  inputOptions: {
    input: `${CWD}/src/app/es6-polyfills.js`,
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs({
        include: 'node_modules/**',
        exclude: ['node_modules/@webcomponents/webcomponentsjs/**'],
      }),
      ENV === constants.ENV.PROD ? uglify() : () => {},
    ],
  },
  outputOptions: {
    format: 'iife',
    name: 'StyleGuideWebComponent',
  },
  outputOptionsEsm: {
    format: 'umd',
    name: 'StyleGuideWebComponent',
  },
  adaptSlashes: (file) => { // eslint-disable-line no-param-reassign
    const isExtendedLengthPath = /^\\\\\?\\/.test(file);
    const hasNonAscii = /[^\u0000-\u0080]+/.test(file);
    return (isExtendedLengthPath || hasNonAscii) ? file : file.replace(/\\/g, '/');
  },
};
