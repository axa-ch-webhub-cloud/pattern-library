module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 chrome version',
            'last 2 firefox version',
            'last 2 safari version',
            'last 2 edge version',
          ], // read comma as 'or', i.e. set *union*
        },
      },
    ],
    '@babel/preset-react',
  ],
};
