const path = require('path');
const nodeResolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const replace = require('@rollup/plugin-replace');
const copy = require('rollup-plugin-copy');
const scss = require('rollup-plugin-scss');
const { gatherVersions } = require('./scripts/version_info.js');

const globalSassImports = [
  'variables.scss',
  '00-colors.scss',
  '20-animations.scss',
  'typography.scss',
]
  .map(item => {
    return `@import "${__dirname}/src/components/00-materials/styles/${item}";`;
  })
  .join('\n');

const stringifiedVersionInfo = gatherVersions();

module.exports = {
  input: 'index.js',
  external: ['lit'],
  output: {
    file: './lib/index.js',
    format: 'es',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      __VERSION_INFO__: stringifiedVersionInfo,
      preventAssignment: true,
    }),
    scss({
      output: false,
      include: '/**/*.scss',
      includePaths: [path.resolve('node_modules')],
      prefix: globalSassImports,
    }),
    // Resolve bare module specifiers to relative paths
    nodeResolve({
      // threat all node_modules as external apart od .scss files
      resolveOnly: [/^\.{0,2}\/|\.scss$/i],
    }),
    // Minify JS
    terser({
      ecma: 2019,
      module: true,
    }),
    // Copy types to lib directory
    copy({
      targets: [{ src: 'index.d.ts', dest: './lib' }],
    }),
  ],
};
