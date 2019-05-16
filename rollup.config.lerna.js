const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace'); // use to setup project enviroment variables
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const stripFontFace = require('postcss-strip-font-face'); // strip all font faces in the bundled css
const postcss = require('postcss');
const customBabelRc = require('./.storybook/.babelrc'); // get the babelrc file
const path = require('path');
const { uglify } = require('rollup-plugin-uglify');

const base = path.resolve(__dirname, 'src').replace(/\\/g, '/');
const globalSassImports = require('./config/globals.js')
  .map(item => {
    return `@import '${base}/${item}';`;
  })
  .join('\n');

const commonPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  sass({
    insert: true,
    include: 'index.scss',
    options: {
      from: undefined,
      includePaths: [
        'node_modules',
        path.resolve(
          path.dirname(require.resolve('breakpoint-sass/package.json')),
          'stylesheets'
        ),
      ],
      data: globalSassImports,
    },
  }),
];

const lib = {
  input: 'index.js',
  external: [
    'lit-element',
    'lit-html/directives/class-map',
    'lit-html/directives/repeat',
    '@skatejs/val',
  ],
  output: {
    file: './lib/index.js',
    format: 'esm',
  },
  plugins: [
    ...commonPlugins,
    babel({
      // presets: ['@babel/preset-env'],
      // plugins: ['@babel/plugin-proposal-class-properties'],
      // Better include it from babel rc
      babelrc: false,
      ...customBabelRc,
      sourceMap: false,
      exclude: ['node_modules/**'], // /node_modules/,
      runtimeHelpers: false,
    }),
    resolve({
      mainFields: ['module', 'main'],
      only: [/^\.{0,2}\/|\.scss$/i], // threat all node_modules as external apart od .scss files
    }),
  ],
};

const dist = {
  input: 'index.js',
  context: 'window',
  output: {
    file: './dist/index.js',
    format: 'iife',
    extend: false,
    name: 'window',
  },
  plugins: [
    ...commonPlugins,
    resolve({
      mainFields: ['module', 'main', 'browser'],
    }),
    babel({
      babelrc: false,
      runtimeHelpers: true,
      presets: ['@babel/preset-env'],
      plugins: [
        ...customBabelRc.plugins,
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
      exclude: [
        'node_modules/@skatejs/val/**',
        '../../../../node_modules/@babel/**',
      ],
    }),
    commonjs({
      namedExports: {
        '@skatejs/val': ['val'],
      },
      include: /node_modules/, // needed because we are in a monorepo and the node_modules could be somewhere up or in the root
    }),
    uglify(),
  ],
};

export default [lib, dist];
