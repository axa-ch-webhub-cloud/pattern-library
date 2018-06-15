const components = require('./components');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const sass = require('rollup-plugin-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const path = require('path');

components.bundleLibFiles({
  external: (id, parent, isResolved) => {
    let resolved = id;

    if (parent && !isResolved) {
      resolved = path.resolve(path.dirname(parent), id);
    }

    return !/\/components\/[amou]-.+\//.test(resolved) && !/\.scss$/i.test(resolved);
  },
  plugins: [
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
          if (url.match(/\/.*\/reboot$/)) {
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
      plugins: ['transform-runtime'],
      runtimeHelpers: true,
    }),
    resolve({
      jsnext: true,
      module: true,
      only: [/^\.{0,2}\/|\.scss$/i], // eslint-disable-line
    }),
  ],
});
