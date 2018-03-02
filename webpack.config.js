const glob = require('glob'); // eslint-disable-line
const regexComponentName = /^.*\/components\/(.*)\/index.js$/;
const entries = glob.sync('./src/components/*/index.js').reduce((entries, entry) => ({
  ...entries,
  [entry.replace(regexComponentName, '$1')]: entry,
}), {});

console.log(entries);

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
        loader: 'sass-loader', // compiles Sass to CSS
      }],
    }],
  },
};
