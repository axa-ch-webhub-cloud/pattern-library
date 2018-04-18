#!/usr/bin/env node
const rollup = require('rollup');
const multiEntry = require('rollup-plugin-multi-entry');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');

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
      }),
      ENV === constants.ENV.PROD ? uglify() : () => {},
      commonjs({
        include: 'node_modules/**',
        exclude: ['node_modules/@webcomponents/webcomponentsjs/**'],
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
