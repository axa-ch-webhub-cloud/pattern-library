const path = require('path');
const fs = require('fs');
const babelRc = fs.readFileSync(path.resolve(`${__dirname}/.babelrc`));

module.exports = {
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.js/,
        // No exclude
        exclude: /node_modules\/(?![lit\-element|lit\-html])/,
        loader: 'babel-loader',
        options: JSON.parse(babelRc),
      },
    ],
  },
};
