module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'safari >= 8', 'not ie <= 10']
        },
      }
    ],
  ],
    plugins: [
    'transform-custom-element-classes',
    '@babel/plugin-proposal-class-properties',
  ]
};
