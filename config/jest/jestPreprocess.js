const babelOptions = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    'transform-custom-element-classes',
    '@babel/plugin-proposal-class-properties',
    // '@babel/plugin-transform-regenerator'
  ],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
