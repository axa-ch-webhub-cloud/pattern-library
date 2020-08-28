const path = require('path');
const base = path.resolve(process.cwd(), 'src');
const babelOptions = require('./.babelrc'); // get the babelrc file
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

require('dotenv-extended').load();

// Global Import SCSS Materials -> SCSS Materials as they are always a dependency.
const globals = require(path.resolve(__dirname, '..', 'config', 'globals.js'))
  .map(item => `@import '${base}/${item}';`)
  .join('\n')
  .replace(/\\/g, '/'); // use '/' dir seps on win32, to satisfy sass-loader/LibSass; otherwise crash
;

const { gatherAllVersions } = require(path.resolve(__dirname, '..', 'scripts', 'build', 'version_info.js'));
const stringifiedVersionInfo = gatherAllVersions(path.resolve(__dirname, '..'));

module.exports = ({ config }) => {
  config.resolve.alias = Object.assign({}, config.resolve.alias, {
    '~/materials': path.join(base, 'components', 'materials'),
  });

  config.plugins.push(
    new webpack.DefinePlugin({__VERSION_INFO__: stringifiedVersionInfo}),
    new CopyPlugin({ patterns: [{ from: 'src/other/pages/utils/assets'}]})
  );

  config.module.rules.push(
    {
      test: /\.scss$/,
      loaders: [
        'to-string-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer({ grid: 'autoplace' })]
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            data: globals,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.js$/,
      exclude: /node_modules\/(?!lit\-element|lit\-html|@axa\-ch)/,
      loader: 'babel-loader',
      options: babelOptions,
    },
    {
      test: /\.jsx/,
      exclude: /node_modules\/(?!lit\-element|lit\-html|@axa\-ch)/,
      loader: 'babel-loader',
      options: {...babelOptions, presets: [...babelOptions.presets]},
    },
    {
      test: /\CHANGELOG.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            gfm: true,
            breaks: false // TODO: make it work
          }
        }
      ]
    }
  );

  config.watchOptions = {
    poll: 1000,
    ignored: ["node_modules"]
  };

  return config;
};
