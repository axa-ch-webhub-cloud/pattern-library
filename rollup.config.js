// This build removes all font-facees from the css, inlines scss in the final bundle and can deal with json imports
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace'); // use to setup project enviroment variables
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const stripFontFace = require('postcss-strip-font-face'); // strip all font faces in the bundled css
const postcss = require('postcss');
const glob = require('glob');
const path = require('path');

const fs = require('fs');

const base = path.resolve(process.cwd(), 'src');

// Global Import SCSS Materials -> SCSS Materials as they are always a dependency.
const globals = require('./config/globals.js')
  .map(item => `@import '${base}/${item}';`)
  .join('\n');

const babelOptions = JSON.parse(fs.readFileSync('./.storybook/.babelrc')); // get the babelrc file

const input = glob.sync('src/components/@(10-atoms|20-molecules|30-organism)/**/index*.js');

/* if you want to test lerna publish with demo-button and demo-link
const input = glob.sync('src/demo/@(demo-button|demo-link)/index*.js');
*/

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  sass({
    insert: true,
    include: ['**/*.scss'],
    options: {
      includePaths: ['node_modules', path.resolve(path.dirname(require.resolve('breakpoint-sass/package.json')), 'stylesheets')],
      data: globals,
    },
    processor: css => postcss([autoprefixer, stripFontFace])
      .process(css)
      .then(result => result.css),
  }),
  babel({
    ...babelOptions,
    babelrc: false,
    exclude: [
      'node_modules/**',
    ],
    runtimeHelpers: true,
  }),
  resolve({
    jsnext: true,
    module: true,
    only: [/^\.{0,2}\/|\.scss$/i], // threat all node_modules as external apart od .scss files
  }),
];

export default input.map(entry => ({
  input: entry,
  output: {
    file: entry.replace('/index.', '/lib/index.'),
    format: 'es',
  },
  plugins,
}));
