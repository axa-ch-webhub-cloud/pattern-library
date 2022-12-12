const path = require('path');
const replace = require('@rollup/plugin-replace'); // use to setup project enviroment variables
const scss = require('rollup-plugin-scss');


const { resolve: pathResolve } = require('path');

const base = pathResolve(__dirname, '../../src').replace(/\\/g, '/');

const globalSassImports = [
  'components/00-materials/styles/variables.scss',
  'components/00-materials/styles/00-colors.scss',
  'components/00-materials/styles/20-animations.scss',
  'components/00-materials/styles/typography.scss',
]
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
  scss({
    output: false,
    include: '/**/*.scss',
    includePaths: [path.resolve('node_modules')],
    prefix: globalSassImports,
  }),
];
