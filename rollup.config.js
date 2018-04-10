import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';
import postcss from 'postcss';

const isProd = process.env.ENV === 'production';

import glob from 'glob';

const libraryTarget = process.env.LIBRARY_TARGET || '';

// certain ES6 Polyfills are needed for all components
// https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
const addES6PolyfillEntry = entry => ['./src/vendor/es6-polyfills.js', entry];
const regexSeparator = /[-_]+/g;
const regexWord = /(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g;
const replaceMatch = (match, index) => {
  if (+match === 0 || regexSeparator.test(match)) {
    return ''; // or if (/\s+/.test(match)) for white spaces
  }

  return index === 0 ? match.toLowerCase() : match.toUpperCase();
};
const camelize = string => string.replace(regexWord, replaceMatch);
const entryCache = {};
const cacheCamelize = (string) => {
  const camelized = camelize(string);

  entryCache[camelized] = string;

  return camelized;
};

// infer all entry names by component's folder name
const regexComponentName = /^.*\/components\/(.*)\/index.js$/;
const entryNames = (entries, entry) => ({
  ...entries,
  [cacheCamelize(entry.replace(regexComponentName, '$1'))]: addES6PolyfillEntry(entry),
});
const componentEntries = glob.sync('./src/components/*/index.js');

export default {
  input: componentEntries,

  output: {
    dir: 'rollup',
    format: 'es',
    sourcemap: true,
  },

  experimentalCodeSplitting: true,

  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
      exclude: ['node_modules/@webcomponents/webcomponentsjs/**'],
    }),
    sass({
      insert: false,
      options: {
        outputStyle: isProd ? undefined : 'expanded',
      },
      processor: css => postcss()
        .process(css)
        .then(result => result.css),
    }),
    babel({
      runtimeHelpers: true,
    }),
    (isProd && uglify()),
  ],
};
