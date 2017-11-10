const rollup = require('rollup');
const dir = require('node-dir');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies
// const multiEntry = require('rollup-plugin-multi-entry');
const resolve = require('rollup-plugin-node-resolve');
const uglify = require('rollup-plugin-uglify');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const sass = require('rollup-plugin-sass');

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
    sass({
      insert: true,
    }),
    babel({
      runtimeHelpers: true,
    }),
  ],
};

const outputOptionsComponents = {
  ...outputOptions,
};

const reGetParentDirAndFileAndComponent = /\/components\/(?:[^/]+\/)+index\.js$/;

mkdirp(`${CWD}/.tmp`, () => {
  dir.files(`${CWD}/src/components`, (err, allFiles) => {
    const jsFiles = allFiles.filter(_file => _file.match(reGetParentDirAndFileAndComponent));
    jsFiles.sort((lx, rx) => {
      if (lx < rx) return -1;
      if (lx > rx) return 1;
      return 0;
    });
    jsFiles.forEach((filePath) => {
      const fPath = filePath.replace('/src/', ENV === constants.ENV.PROD ? '/dist/' : '/.tmp/');
      async function buildComponents() {
        const bundle = await rollup.rollup({
          ...inputOptionsComponents,
          plugins: [
            ...inputOptionsComponents.plugins,
          ],
          input: filePath,
        });
        console.log(fPath.replace('.js', '.css'))
        console.log(`Bundled to: ${fPath}`); // eslint-disable-line
        // or write the bundle to disk
        await bundle.write({
          ...outputOptionsComponents,
          file: fPath,
        });
      }
      buildComponents();
    });
  });
});
