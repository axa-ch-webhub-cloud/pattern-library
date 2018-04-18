exports.config = {
  user: 'lucamele1',
  key: 'pjjyhNhmJkFa5H8VdwqW',
  server: 'hub-cloud.browserstack.com',
  testServer: 'http://localhost:3000',

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
