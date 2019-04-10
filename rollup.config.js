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

// use '/' dir seps on win32, to satisfy sass-loader/LibSass; otherwise crash
const base = path.resolve(process.cwd(), 'src').replace(/\\/g, '/');

// Global Import SCSS Materials -> SCSS Materials as they are always a dependency.
const globals = require('./config/globals.js')
  .map(item => `@import '${base}/${item}';`)
  .join('\n');

const babelOptions = require('./.storybook/.babelrc'); // get the babelrc file

const input = glob.sync('src/components/@(10-atoms|20-molecules|30-organism)/**/index*.js');

const LIB = 'lib';
const DIST = 'dist';

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
        includePaths: ['node_modules', path.resolve(path.dirname(require.resolve('breakpoint-sass/package.json')), 'stylesheets')],
        data: globals,
      },
      processor: css => postcss([autoprefixer, stripFontFace])
        .process(css)
        .then(result => result.css),
    }),
  ];
  // is LIB
  if (type === LIB) {
    return [
      ...commons,
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
  }
  // is DIST
  return [
    ...commons,
    babel({
      presets: babelOptions.presets,
      plugins: [
        ...babelOptions.plugins,
        '@babel/plugin-transform-runtime'
      ],
      babelrc: false,
      exclude: [
        'node_modules/@skatejs/val/**',
        'node_modules/@babel/**',
      ],
      runtimeHelpers: true,
    }),
    resolve({
      jsnext: true,
    }),
    commonjs({
      namedExports: {
        '@skatejs/val': ['val'],
      },
      include: 'node_modules/**'
    }),
    uglify(),
  ];
};

const generateOutputConfig = type => entry => ({
  input: entry,
  external: type !== LIB ? undefined : [
    'lit-element',
    'lit-html/directives/class-map',
    'lit-html/directives/repeat',
    '@skatejs/val'
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
