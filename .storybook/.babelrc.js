module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 8', 'ie >= 11'], // read comma as 'or', i.e. set *union*
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [['@babel/plugin-proposal-class-properties']],
};
