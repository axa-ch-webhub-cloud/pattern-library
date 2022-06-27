const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

require('dotenv-extended').load();

const base = path.resolve(process.cwd(), 'src');

// Global Import SCSS Materials -> SCSS Materials as they are always a dependency.
const globals = require(path.resolve(__dirname, '..', 'config', 'globals.js'))
  .map(item => `@import '${base}/${item}';`)
  .join('\n')
  .replace(/\\/g, '/'); // use '/' dir seps on win32, to satisfy sass-loader/LibSass; otherwise crash
const { gatherAllVersions } = require(path.resolve(
  __dirname,
  '..',
  'scripts',
  'build',
  'version_info.js'
));
const stringifiedVersionInfo = gatherAllVersions(path.resolve(__dirname, '..'));
const colorsScssFile = fs.readFileSync(
  path.resolve(
    __dirname,
    '..',
    'src',
    'components',
    '00-materials',
    'styles',
    '00-colors.scss'
  )
);

module.exports = {
  stories: [
    '../src/other/pages/landingpage/story.js',
    '../src/other/pages/guides/getting-started/story.jsx',
    '../src/other/pages/guides/structure-approach/story.js',
    '../src/other/pages/what-is-new/story.js',
    '../src/other/pages/contact/story.js',
    '../src/components/**/@(story|demo).@(js|jsx)',
    '../src/other/pages/showcases/axa-ch-main/story.js',
  ],
  addons: [
    '@storybook/addon-knobs',
    './addons/readme/register',
    './addons/usage/register',
    './addons/changelog/register',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  staticDirs: [path.resolve(__dirname, '../src/static')],
  framework: '@storybook/web-components',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '~/materials': path.join(base, 'components', 'materials'),
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        __VERSION_INFO__: stringifiedVersionInfo,
        __COLORS_SCSS_AS_STRING__: '`' + colorsScssFile.toString() + '`',
      }),
      new CopyPlugin({ patterns: [{ from: 'src/other/pages/utils/assets' }] })
    );

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'css-loader',
          options: {
            exportType: 'string',
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            additionalData: globals,
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
