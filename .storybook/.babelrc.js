module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 8', 'not ie <= 10']
        },
      }
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
  ]
};
