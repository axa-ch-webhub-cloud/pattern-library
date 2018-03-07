module.exports = ({ file, options, env }) => ({
  plugins: [
    require('autoprefixer')({ // eslint-disable-line

    }),
    require('./stack/tasks/postcss-font-base64.js')({ // eslint-disable-line

    }),
    env === 'production' && require('cssnano')({ // eslint-disable-line
      preset: 'default',
    }),
  ],
});
