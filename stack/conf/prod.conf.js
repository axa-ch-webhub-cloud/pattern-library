exports.config = {
  user: 'lucamele1',
  key: 'HERE_KEY',
  server: 'hub-cloud.browserstack.com',

  commonCapabilities: {
    name: 'parallel_test',
    build: 'patterns-lib',
  },

  capabilities: [{
    browserName: 'chrome',
  }, {
    browserName: 'firefox',
  }, {
    browserName: 'safari',
  }, {
    browserName: 'internet explorer',
  }],
};

exports.config.capabilities = {
  ...exports.config.capabilities,
  ...exports.config.commonCapabilities,
};
