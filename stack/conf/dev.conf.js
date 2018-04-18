exports.config = {
  user: 'lucamele1',
  key: 'pjjyhNhmJkFa5H8VdwqW',
  server: 'hub-cloud.browserstack.com',
  testServer: 'http://localhost:3000',

  capabilities: [{
    browserName: 'chrome',
    name: 'dev',
    build: 'patterns-lib',
    'browserstack.local': 'true',
  }],
};
