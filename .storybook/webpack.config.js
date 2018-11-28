const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add scss loaders:
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    loaders: ["raw-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  return defaultConfig;
};
