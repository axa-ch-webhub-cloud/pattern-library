const resolve = require('@rollup/plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('@rollup/plugin-replace'); // use to setup project enviroment variables
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const { uglify } = require('rollup-plugin-uglify');
const postcss = require('postcss');
const commonjs = require('@rollup/plugin-commonjs');
const fs = require('fs');
const { resolve: pathResolve, extname } = require('path');
const customBabelRc = require('./.storybook/.babelrc'); // get the babelrc file
const copy = require('rollup-plugin-copy');

const base = pathResolve(__dirname, 'src').replace(/\\/g, '/');

const memory = {};

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
    })
  ],
};

const preDist = {
  input: 'package.json',
  plugins: [
    {
      name: 'pre-dist',
      transform(json, id) {
        if (extname(id) !== '.json') {
          return null;
        }
        const jsonData = fs.readFileSync(id, 'UTF-8');
        let parsedJson = '{}';
        try {
          parsedJson = JSON.parse(jsonData);
          // save a backup in memory
          memory.preDistJsonData = jsonData;

          // prepare each component for the dist build. make sure to use the just created lib file instead of src due to 
          // rollup's node-sass nor being to be applied throught the whole node-resolve algorythm, having as effect that 
          // scss inside js works only in the first level of the node-resolve algorythm
          parsedJson.main = 'lib/index.js';
        } catch (e) {
          throw new Error(`Something went wrong while parsing the package.json of the component. Error: ${e}`);
        }
        fs.writeFileSync(id, JSON.stringify(parsedJson, null, 2));
        return '';
      }
    }
  ]
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
  ],
};

const postDist = {
  input: 'package.json',
  plugins: [
    {
      name: 'post-dist',
      transform(json, id) {
        if (extname(id) !== '.json') {
          return null;
        }
        if (!memory.preDistJsonData) {
          throw new Error('Package json cannot be reverted. Something must have gone wrong in the preDist build. Please revert package.json');
        }
        fs.writeFileSync(id, memory.preDistJsonData, 'UTF-8');
        return '';
      }
    }
  ]
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

// Sometimes there is no react version to build. I.e icons
const rollupConfig = [lib];

if (fs.existsSync('./index.react.js')) {
  rollupConfig.push(libReact);
}
// Prepare src for dist
rollupConfig.push(preDist);
// Bundle and build dist
rollupConfig.push(dist);
// Cleanup after
rollupConfig.push(postDist);

export default rollupConfig;
