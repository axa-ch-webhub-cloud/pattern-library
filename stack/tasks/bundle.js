const rollup = require('rollup');
// const multiEntry = require('rollup-plugin-multi-entry');
const resolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');

const constants = require('../constants');

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

const inputOptions = {
  input: `${CWD}/src/app/wc-enabler.js`,
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
};

const outputOptions = {
  file: `${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/app/wc-enabler.js`,
  format: 'iife',
  name: 'StyleGuideWebComponent',
};

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  console.log(bundle.imports); // eslint-disable-line
  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();
