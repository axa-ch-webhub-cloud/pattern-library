const fs = require('fs');
const commonjs = require('@rollup/plugin-commonjs');
const { extname } = require('path');
const { terser } = require('rollup-plugin-terser');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { commonPlugins } = require('./common.rollup.js');

const memory = {};

const preDist = {
  input: 'package.json',
  plugins: [
    {
      name: 'pre-dist',
      transform(code, id) {
        if (extname(id) !== '.json') {
          return null;
        }
        const jsonData = code;
        let parsedJson = '{}';
        try {
          parsedJson = JSON.parse(jsonData);
          // save a backup in memory
          memory.preDistJsonData = jsonData;

          // prepare each component for the dist build. make sure to use the just created lib file instead of src due to
          // rollup's node-sass not being able to be applied throught the whole node-resolve algorythm, having as effect that
          // scss inside js works only in the first level of the node-resolve algorythm
          parsedJson.main = 'lib/index.js';
        } catch (e) {
          throw new Error(
            `Something went wrong while parsing the package.json of the component. Error: ${e}`
          );
        }
        // Rollup cant handle internally .json files therefore do not return code
        fs.writeFileSync(id, JSON.stringify(parsedJson, null, 2));
        return '';
      },
    },
  ],
};

const dist = {
  input: 'index.js',
  context: 'window',
  output: {
    file: './dist/index.js', // no react dist on purpose
    format: 'iife',
    name: 'window',
  },
  plugins: [
    ...commonPlugins,
    // Resolve bare module specifiers to relative paths
    nodeResolve({
      mainFields: ['module', 'main', 'browser'],
    }),
    // needed because we are in a monorepo and the node_modules could be somewhere up or in the root
    commonjs({
      include: /node_modules/,
    }),
    // Minify JS
    terser({
      ecma: 2019,
      compress: true,
      mangle: true,
    }),
  ],
};

const postDist = {
  input: 'package.json',
  plugins: [
    {
      name: 'post-dist',
      transform(code, id) {
        if (extname(id) !== '.json') {
          return null;
        }
        if (!memory.preDistJsonData) {
          throw new Error(
            'Package json cannot be reverted. Something must have gone wrong in the preDist build. Please revert package.json'
          );
        }
        fs.writeFileSync(id, memory.preDistJsonData, 'UTF-8');
        return '';
      },
    },
  ],
};

module.exports = { preDist, dist, postDist };
