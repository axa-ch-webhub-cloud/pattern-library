const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('@rollup/plugin-replace'); // use to setup project enviroment variables
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const customBabelRc = require('./.storybook/.babelrc'); // get the babelrc file
const fs = require('fs');
const path = require('path');
const process = require('process');
const { uglify } = require('rollup-plugin-uglify');
const copy = require('rollup-plugin-copy');

// eslint-disable-next-line import/no-dynamic-require
const componentPackageJson = require(`${process.cwd()}/package.json`);

const base = path.resolve(__dirname, 'src').replace(/\\/g, '/');
const globalSassImports = require('./config/globals.js')
  .map(item => {
    return `@import '${base}/${item}';`;
  })
  .join('\n');

// *** CSS & JS-Prefixing
const types = new Map();
types.set('10-atoms', 'a-')
types.set('20-molecules', 'm-')
types.set('30-organisms', 'o-')

const componentName = componentPackageJson.name.replace('@axa-ch/', '');
const cwdAsStringArray = process.cwd().split('/');
const componentTypePrefix = types.get(cwdAsStringArray[cwdAsStringArray.length-2]); // atom (a-) / molecule (m-) / organism (o-)
const prefix = `nva${componentPackageJson.version.replace(/\./g, '-')}`;
const standardComponentClassPrefix = componentTypePrefix + componentName; // a-button-link
const cssPrefix = `${prefix}_${componentTypePrefix}${componentName}`; //.nva1-1-1_button-link
// *** /CSS

const commonPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  sass({
    insert: true,
    include: '**/*.scss',
    options: {
      includePaths: [
        'node_modules',
      ],
      data: globalSassImports,
    },
    processor: css =>
      postcss({
        plugins: [autoprefixer()],
      })
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
    resolve({
      mainFields: ['module', 'main'],
      only: [/^\.{0,2}\/|\.scss$/i], // threat all node_modules as external apart od .scss files
    }),
    copy({
      targets: [
        'index.d.ts',
      ],
      outputFolder: './lib'
    }),
    replace({[standardComponentClassPrefix]: cssPrefix})
  ],
};

// TODO Should be removed before merge, since unused.
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
    resolve({
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
    replace({[standardComponentClassPrefix]: cssPrefix})
  ],
};

const libReact = {
  ...lib,
  input: 'index.react.js',
  output: {
    file: './lib/index.react.js',
    format: 'es',
  },
  plugins: [...lib.plugins, copy({
    targets: [
      'index.react.d.ts',
    ],
    outputFolder: './lib'
  })]
};

const rollupConfig = [lib];

// Sometimes there is no react version to build. I.e icons
if (fs.existsSync('./index.react.js')) {
  rollupConfig.push(libReact);
}

rollupConfig.push(dist);

export default rollupConfig;
