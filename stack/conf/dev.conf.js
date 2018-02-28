exports.config = {
  user: 'lucamele1',
  key: 'pjjyhNhmJkFa5H8VdwqW',
  server: 'hub-cloud.browserstack.com',

  capabilities: [{
    browserName: 'chrome',
    name: 'local_test',
    build: 'cucumber-js-browserstack',
    'browserstack.local': false,
  }],
};
