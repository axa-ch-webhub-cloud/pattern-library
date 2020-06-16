const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.example/,
          use: [
            {
              loader: 'raw-loader',
            },
          ],
        },
      ],
    },
    resolve: {
      // // Force Gatsby to look for dependencies within the local node_modules from docs.
      // modules: ['node_modules'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        components: path.resolve(__dirname, './src/components'),
      },
    },
  });
};
