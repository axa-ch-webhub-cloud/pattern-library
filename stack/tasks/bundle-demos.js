const rollup = require('rollup');
const multiEntry = require('rollup-plugin-multi-entry');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

const constants = require('../constants');

const ENV = process.argv[2]; // second element is the first argument
const CWD = process.cwd();

async function buildComponents() {
  const fPath = `${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/app/all-demos.js`;
  const bundle = await rollup.rollup({
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify(ENV === constants.ENV.PROD ? 'production' : 'development'),
      }),
      multiEntry(),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
        preferBuiltins: false,
        extensions: ['.js', '.jsx'],
      }),
      ENV === constants.ENV.PROD ? uglify() : () => {},
      commonjs({
        include: 'node_modules/**',
        exclude: ['node_modules/@webcomponents/webcomponentsjs/**'],
      }),
      replace({
        exclude: 'node_modules/**',
        ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      }),
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
        presets: ['react'],
      }),
    ],
    input: './src/demos/*.jsx',
  });
  console.log(`Bundled to: ${fPath}`); // eslint-disable-line
  // or write the bundle to disk
  await bundle.write({
    format: 'iife',
    name: 'StyleGuideWebComponentReact',
    file: fPath,
  });
}

buildComponents();
