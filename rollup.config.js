import jsPrefixer, { componentInfo } from './rollup-plugin-javascript-prefixer';

const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('@rollup/plugin-replace'); // use to setup project enviroment variables
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const classPrefixer = require('postcss-prefix-selector');
const customBabelRc = require('./.storybook/.babelrc'); // get the babelrc file
const fs = require('fs');
const path = require('path');
const process = require('process');
const { uglify } = require('rollup-plugin-uglify');
const copy = require('rollup-plugin-copy');

const base = path.resolve(__dirname, 'src').replace(/\\/g, '/');
const globalSassImports = require('./config/globals.js')
  .map(item => {
    return `@import '${base}/${item}';`;
  })
  .join('\n');

const rollupConfig = [];

const commonPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  jsPrefixer(),
  sass({
    insert: true,
    include: '**/*.scss',
    options: {
      includePaths: ['node_modules'],
      data: globalSassImports,
    },
    processor: css =>
      postcss({
        plugins: [autoprefixer()],
      })
        .use(
          classPrefixer({
            prefix: componentInfo.prefix,
            transform: (prefX, selector) => {
              // Exclude tags, only apply to classes
              return selector
                .split('.')
                .filter(singleClass => singleClass !== '')
                .map(singleClass => {
                  if (
                    singleClass.startsWith(
                      componentInfo.standardComponentClassPrefix
                    )
                  ) {
                    return `.${prefX}_${singleClass}`;
                  }
                  // Tagnames, but could also be a classname without
                  // BEM-prefix, which would not be prefixed anymore.
                  // This means, we are not allowed to use classnames that do
                  // not start with 'a-button'.
                  return singleClass;
                })
                .join('');
            },
          })
        )
        .process(css, { from: undefined })
        .then(result => result.css),
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
    format: 'es',
  },
  plugins: [
    ...commonPlugins,
    babel({
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
          },
        ],
      ],
      plugins: ['@babel/plugin-proposal-class-properties'],
      babelrc: false,
      exclude: ['node_modules/**'],
      runtimeHelpers: false,
    }),
    nodeResolve({
      mainFields: ['module', 'main'],
      only: [/^\.{0,2}\/|\.scss$/i], // threat all node_modules as external apart od .scss files
    }),
    copy({
      targets: ['index.d.ts'],
      outputFolder: './lib',
    }),
  ],
};

const dist = {
  input: 'index.js',
  context: 'window',
  output: {
    file: './dist/index.js', // no react dist on purpose
    format: 'iife',
    extend: false,
    name: 'window',
  },
  plugins: [
    ...commonPlugins,
    nodeResolve({
      mainFields: ['module', 'main', 'browser'],
    }),
    commonjs({
      namedExports: {
        '@skatejs/val': ['val'],
      },
      include: /node_modules/, // needed because we are in a monorepo and the node_modules could be somewhere up or in the root
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
        '../../../../node_modules/@skatejs/val/**',
        '../../../../node_modules/@babel/**',
      ],
    }),
    uglify(),
  ],
};

const libReact = {
  ...lib,
  input: 'index.js',
  output: {
    file: './lib/index.react.js',
    format: 'es',
  },
  plugins: [
    ...lib.plugins,
    copy({
      targets: ['index.react.d.ts'],
      outputFolder: './lib',
    }),
  ],
};

rollupConfig.push(lib);

// Sometimes there is no react version to build. I.e icons
if (fs.existsSync('./index.react.js')) {
  rollupConfig.push(libReact);
}

rollupConfig.push(dist);

export default rollupConfig;
