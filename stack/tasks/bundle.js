const rollup = require('rollup');
const dir = require('node-dir');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies
// const multiEntry = require('rollup-plugin-multi-entry');
const resolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');

const constants = require('../constants');

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

// polyfill files
const inputOptions = {
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
};

const outputOptions = {
  file: `${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/app/es6-polyfills.js`,
  format: 'iife',
  name: 'StyleGuideWebComponent',
};

async function buildPolyfills() {
  const bundle = await rollup.rollup(inputOptions);
  console.log(bundle.imports); // eslint-disable-line
  // or write the bundle to disk
  await bundle.write(outputOptions);
}

buildPolyfills();

// vendors: @TODO

// components:
const inputOptionsComponents = {
  ...inputOptions,
  plugins: [
    ...inputOptions.plugins,
    babel(),
  ],
};

const outputOptionsComponents = {
  ...outputOptions,
};

const reGetParentDirAndFile = /(?:[^/]+\/)?[^/]+\.[^/]+$/;
const reGetParentDirAndFileAndComponent = /\/components\/[^/]+\/index\.js$/;

mkdirp(`${CWD}/.tmp`, () => {
  dir.files(`${CWD}/src/components`, (err, allFiles) => {
    const jsFiles = allFiles.filter(_file => _file.match(reGetParentDirAndFileAndComponent));
    const basePath = ENV === constants.ENV.PROD ? `${CWD}/dist/components` : `${CWD}/.tmp/components`;
    jsFiles.forEach((filePath) => {
      async function buildComponents() {
        const bundle = await rollup.rollup({
          ...inputOptionsComponents,
          input: filePath,
        });
        console.log(bundle.imports); // eslint-disable-line
        // or write the bundle to disk
        await bundle.write({
          ...outputOptionsComponents,
          file: `${basePath}/${filePath.match(reGetParentDirAndFile)[0]}`,
        });
      }
      buildComponents();
    });
  })
});
