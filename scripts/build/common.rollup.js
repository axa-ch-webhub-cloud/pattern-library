const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const replace = require('@rollup/plugin-replace'); // use to setup project enviroment variables
const rollupPluginSass = require('rollup-plugin-sass');

const { resolve: pathResolve } = require('path');

const base = pathResolve(__dirname, '../../src').replace(/\\/g, '/');

const globalSassImports = require('../../config/globals.js')
  .map(item => {
    return `@import '${base}/${item}';`;
  })
  .join('\n');

const { gatherVersions } = require('./version_info.js');

const stringifiedVersionInfo = gatherVersions();

module.exports.commonPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    __VERSION_INFO__: stringifiedVersionInfo,
  }),
  rollupPluginSass({
    insert: false /* no automatic style insertion in <head>, style use under component control */,
    include: '**/*.scss',
    options: {
      includePaths: ['node_modules'],
      data: globalSassImports,
    },
    processor: css =>
      postcss({
        plugins: [autoprefixer({ grid: 'autoplace' })],
      })
        .process(css, { from: undefined })
        .then(result => result.css),
  }),
];
