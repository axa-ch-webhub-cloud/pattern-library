const rollup = require('rollup');

const constants = require('../../constants');
const common = require('./_common');

const ENV = process.env.NODE_ENV; // second element is the first argument.
const CWD = process.cwd();

// @TODO: dry principle with buildApp
async function buildPolyfills() {
  const bundle = await rollup.rollup(common.inputOptions);
  const file = common.adaptSlashes(`${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/app/es6-polyfills.js`);
  // console.log(`Styleguide Bundel: ${file}`); // eslint-disable-line
  // or write the bundle to disk
  await bundle.write({
    ...common.outputOptions,
    file,
  });
}

module.exports = buildPolyfills;
