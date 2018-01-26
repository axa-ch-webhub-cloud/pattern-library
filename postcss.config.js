module.exports = {
  plugins: [
    require('autoprefixer')({ // eslint-disable-line

    }),
    require('./stack/tasks/postcss-font-base64.js')({ // eslint-disable-line

    }),
    require('cssnano')({ // eslint-disable-line
      preset: 'default',
    }),
  ],
};
