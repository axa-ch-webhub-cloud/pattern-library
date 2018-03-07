const glob = require('glob'); // eslint-disable-line

// certain ES6 Polyfills are needed for all components
// https://stackoverflow.com/questions/38960490/how-can-i-polyfill-promise-with-webpack
const addES6PolyfillEntry = entry => ['.src/app/es6-polyfills.js', entry];

// infer all entry names by component's folder name
const regexComponentName = /^.*\/components\/(.*)\/index.js$/;
const entryNames = (entries, entry) => ({
  ...entries,
  [entry.replace(regexComponentName, '$1')]: addES6PolyfillEntry(entry),
});
const entries = glob.sync('./src/components/*/index.js')
  .reduce(entryNames, {});

module.exports = {
  entry: entries,
  output: {
    filename: '[name]/index.js',
    path: `${__dirname}/bundle/components`,
  },

  module: {
    rules: [{
      test: /\.js$/,
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
