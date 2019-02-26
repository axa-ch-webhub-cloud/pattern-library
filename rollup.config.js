// This build removes all font-facees from the css, inlines scss in the final bundle and can deal with json imports

const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace'); // use to setup project enviroment variables
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const stripFontFace = require('postcss-strip-font-face'); // strip all font faces in the bundled css
const postcss = require('postcss');

const fs = require('fs');

const babelOptions = JSON.parse(fs.readFileSync('./.storybook/.babelrc')); // get the babelrc file

export default {
  input: 'src/components/molecules/button/src/index.js',
  output: {
    file: 'src/components/molecules/button/lib/index.js',
    format: 'es',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    sass({
      insert: true,
      include: ['**/*.scss'],
      options: {
        includePaths: [
          'node_modules',
        ],
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
  ],
};
