exports.config = {
  user: 'lucamele1',
  key: 'HERE_KEY',
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    browserName: 'chrome',
    name: 'local_test',
    build: 'cucumber-js-browserstack',
    'browserstack.local': true,
  }],
};
