// This build removes all font-facees from the css, inlines scss in the final bundle and can deal with json imports
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace'); // use to setup project enviroment variables
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const stripFontFace = require('postcss-strip-font-face'); // strip all font faces in the bundled css
const postcss = require('postcss');
const glob = require('glob');
const path = require('path');
const { uglify } = require('rollup-plugin-uglify');

// map platform native backslash on win32 to platform neutral forward slash (which sass-loader/LibSass needs)
const base = path.resolve(process.cwd(), 'src').replace(/\\/g, '/');

// Global Import SCSS Materials -> SCSS Materials as they are always a dependency.
const globals = require('./config/globals.js')
  .map(item => `@import '${base}/${item}';`)
  .join('\n');

const babelOptions = require('./.storybook/.babelrc'); // get the babelrc file

const input = glob.sync(
  'src/components/@(05-utils|10-atoms|20-molecules|30-organisms)/*/index*.js'
);

const LIB = '.tmp-lib';
const DIST = '.tmp-dist';

/* if you want to test lerna publish with demo-button and demo-link
const input = glob.sync('src/demo/@(demo-button|demo-link)/index*.js');
*/

const generatePlugins = type => {
  const commons = [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    sass({
      insert: true,
      include: ['**/*.scss'],
      options: {
        includePaths: [
          'node_modules',
          path.resolve(
            path.dirname(require.resolve('breakpoint-sass/package.json')),
            'stylesheets'
          ),
        ],
        data: globals,
      },
      processor: css =>
        postcss([autoprefixer, stripFontFace])
          .process(css)
          .then(result => result.css),
    }),
  ];
  // is LIB
  if (type === LIB) {
    return [
      ...commons,
      babel({
        plugins: [
          '@babel/plugin-proposal-class-properties',
        ],
        babelrc: false,
        exclude: ['node_modules/**'],
        runtimeHelpers: false,
      }),
      resolve({
        mainFields: ['module', 'main'],
        only: [/^\.{0,2}\/|\.scss$/i], // threat all node_modules as external apart od .scss files
      }),
    ];
  }
  // is DIST
  return [
    ...commons,
    resolve({
      mainFields: ['module', 'main', 'browser'],
    }),
    commonjs({
      namedExports: {
        '@skatejs/val': ['val'],
      },
      include: ['node_modules/**', 'src/**/node_modules/**'],
    }),
    babel({
      presets: ['@babel/preset-env'],
      plugins: [
        ...babelOptions.plugins,
        [
          '@babel/plugin-transform-runtime',
          {
            absoluteRuntime: false,
            corejs: false,
            helpers: true,
            regenerator: true,
            useESModules: false,
          },
        ],
      ],
      babelrc: false,
      exclude: ['node_modules/@skatejs/val/**', 'node_modules/@babel/**'],
      runtimeHelpers: true,
    }),
    uglify(),
  ];
};

const generateOutputConfig = type => entry => ({
  input: entry,
  external:
    // prettier-ignore
    type !== LIB ? undefined : [ // prettier-ignore
      'lit-element',
      'lit-html/directives/class-map',
      'lit-html/directives/repeat',
      '@skatejs/val',
    ],
  context: type === DIST ? 'window' : undefined,
  output: {
    // define export path (lib/index.js for lib, dist/index.js for dist)
    file: entry.replace('/index.', `/${type}/index.`),
    // defined export type
    format: type === LIB ? 'es' : 'iife',
    // if is IIFE, make sure to extend the window object
    extend: !type === LIB,
    // attach the IIFE to the window object
    name: type === LIB ? undefined : 'window',
  },
  // generate plugin array based on type
  plugins: generatePlugins(type),
});

const esms = input.map(generateOutputConfig(LIB));
const iifes = input.map(generateOutputConfig(DIST));

export default esms.concat(iifes);
