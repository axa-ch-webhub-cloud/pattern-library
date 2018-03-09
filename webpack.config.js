const glob = require('glob'); // eslint-disable-line

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
const componentEntries = glob.sync('./src/components/*/index.js')
  .reduce(entryNames, {});

const filename = ({ chunk: { name, id } }) => {
  const libraryTargetSuffix = libraryTarget ? `.${libraryTarget}` : '';
  const paths = {
    app: 'app',
    demo: 'demos',
    common: 'common',
  };

  // save all components entries to their respective folders
  if (entryCache[name]) {
    return `components/${entryCache[name] || name}/index${libraryTargetSuffix}.js`;
  }

  // save app and demo entries to their respective folders
  if (name) {
    return `${paths[name]}/${name}.js`;
  }

  // save optimized module chunks into common/
  return `common/${id}.js`;
};

module.exports = {
  entry: {
    ...componentEntries,
    app: './src/app/app.js',
    // @todo: demos hasn't any pattern yet
    demo: './src/demos/demo.react.jsx',
    common: './src/js/index.js',
  },
  output: {
    filename,
    path: `${__dirname}/bundle`,
    library: '[name]',
    libraryTarget: libraryTarget || 'umd',
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: 'babel-loader',
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'raw-loader', // import CSS as string
      }, {
        loader: 'postcss-loader', // autoprefix and other magic
      }, {
        loader: 'sass-loader', // compiles Sass to CSS
      }],
    }],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
};
