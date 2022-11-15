const copy = require('rollup-plugin-copy');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const { commonPlugins } = require('./common.rollup.js');

const lib = {
  input: 'index.js',
  external: ['lit'],
  output: {
    file: './lib/index.js',
    format: 'es',
  },
  plugins: [
    ...commonPlugins,
    // Resolve bare module specifiers to relative paths
    nodeResolve({
      mainFields: ['module', 'main'],
      // threat all node_modules as external apart od .scss files
      resolveOnly: [/^\.{0,2}\/|\.scss$/i],
    }),
    // Minify JS
    terser({
      ecma: 2019,
      module: true,
      warnings: true,
    }),
    // Copy types to lib directory
    copy({
      targets: [{ src: 'index.d.ts', dest: './lib' }],
    }),
  ],
};

const libReact = {
  ...lib,
  input: 'index.react.js',
  external: [...lib.external],
  output: {
    file: './lib/index.react.js',
    format: 'es',
  },
  plugins: [
    ...lib.plugins,
    copy({
      targets: [{ src: 'index.react.d.ts', dest: './lib' }],
    }),
  ],
};

module.exports = { lib, libReact };
