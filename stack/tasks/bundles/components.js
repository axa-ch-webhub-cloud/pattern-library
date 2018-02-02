const rollup = require('rollup');
const dir = require('node-dir');
const mkdirp = require('mkdirp'); // eslint-disable-line import/no-extraneous-dependencies
// const multiEntry = require('rollup-plugin-multi-entry');
const babel = require('rollup-plugin-babel');
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

const constants = require('../../constants');
const common = require('./_common');

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();


const inputOptionsComponents = {
  ...common.inputOptions,
  plugins: [
    ...common.inputOptions.plugins,
    sass({
      insert: false,
      options: {
        outputStyle: ENV === constants.ENV.PROD ? undefined : 'expanded',
      },
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css),
    }),
    babel({
      runtimeHelpers: true,
    }),
  ],
};

const outputOptionsComponents = {
  ...common.outputOptions,
};

const reGetParentDirAndFileAndComponent = /\/components\/(?:[^/]+\/)+index\.js$/;

const bundleSingleFile = (filePath) => {
  const fPath = filePath.replace('/src/', ENV === constants.ENV.PROD ? '/dist/' : '/.tmp/');
  async function buildComponents() {
    const bundleConfig = {
      ...inputOptionsComponents,
      plugins: [
        ...inputOptionsComponents.plugins,
      ],
      input: filePath,
    };

    const bundle = await rollup.rollup(bundleConfig);

    console.log(fPath.replace('.js', '.css')); // eslint-disable-line
    console.log(`Bundled to: ${fPath}`); // eslint-disable-line
    // or write the bundle to disk
    await bundle.write({
      ...outputOptionsComponents,
      file: fPath,
    });
    if (ENV === constants.ENV.PROD) {
      await bundle.write({
        ...common.outputOptionsEsm,
        file: fPath.replace('.js', '.umd.js'),
      });
    }
  }
  buildComponents();
};

const bundleAllFiles = () => {
  mkdirp(`${CWD}/.tmp`, () => {
    dir.files(`${CWD}/src/components`, (err, allFiles) => {
      allFiles = allFiles.map(common.adaptSlashes); // eslint-disable-line no-param-reassign
      const jsFiles = allFiles.filter(_file => _file.match(reGetParentDirAndFileAndComponent));
      jsFiles.sort((lx, rx) => {
        if (lx < rx) return -1;
        if (lx > rx) return 1;
        return 0;
      });
      jsFiles.forEach(bundleSingleFile);
    });
  });
};

module.exports = {
  bundleAllFiles,
  bundleSingleFile,
};
