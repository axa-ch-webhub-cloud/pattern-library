const glob = require('glob'); // eslint-disable-line

const regexComponentName = /^.*\/components\/(.*)\/index.js$/;
const entryNames = (entries, entry) => ({
  ...entries,
  [entry.replace(regexComponentName, '$1')]: entry,
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
