const components = require('./components');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');

const constants = require('./../../constants');

const ENV = process.argv[2]; // second element is the first argument.

components.bundleLibFiles({
  external: ['src/js', 'node_modules'],
  plugins: [
    replace({
      ENV: JSON.stringify(ENV),
      DEV: JSON.stringify(constants.ENV.DEV),
      PROD: JSON.stringify(constants.ENV.PROD),
    }),
    sass({
      insert: true,
      include: ['**/*.scss'],
      options: {
        includePaths: [
          'node_modules',
        ],
        // reboot is an external dependency and has to be used carfully from the
        // user of aletheia. Here we take it out for integration purposes (dont import twice)
        importer: function importer(url) {
          if (url.match(/@axa-ch\/patterns-library\/.*\/reboot$/)) {
            return { contents: '' };
          }
          return null;
        },
      },
      processor: css => postcss([autoprefixer])
        .process(css)
        .then(result => result.css),
    }),
    babel({
      exclude: [
        'node_modules/**',
      ],
      runtimeHelpers: true,
    }),
    resolve({
      jsnext: true,
      module: true,
      preferBuiltins: false,
      jail: 'src/components/**',
      // only: [/^\.{0,2}\/|\.scss$/i], // threat all node_modules as external
    }),
  ],
});
