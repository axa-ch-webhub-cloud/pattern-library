// const multiEntry = require('rollup-plugin-multi-entry');
const resolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');

const constants = require('../../constants');

const ENV = process.env.NODE_ENV; // second element is the first argument.
const CWD = process.cwd();

module.exports = {
  inputOptions: {
    input: `${CWD}/src/app/es6-polyfills.js`,
    plugins: [
      resolve({
        jsnext: true,
        main: true,
        browser: true,
        preferBuiltins: false,
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
  outputOptionsUmd: {
    format: 'umd',
    name: 'StyleGuideWebComponent',
  },
  outputOptionsEs: {
    format: 'es',
    name: 'StyleGuideWebComponentLib',
  },
  adaptSlashes: (file) => { // eslint-disable-line no-param-reassign
    const isExtendedLengthPath = /^\\\\\?\\/.test(file);
    const hasNonAscii = /[^\u0000-\u0080]+/.test(file); // eslint-disable-line
    return (isExtendedLengthPath || hasNonAscii) ? file : file.replace(/\\/g, '/');
  },
};
