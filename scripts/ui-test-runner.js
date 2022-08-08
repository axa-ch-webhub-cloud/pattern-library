const concurrently = require('concurrently');
// const os = require('os');
const path = require('path');

// testcafe cannot manage more than 6 instances.
// const numCpus = os.cpus().length > 6 ? 6 : os.cpus().length;
// const RUN_TESTCAFE = `cross-env TEST_HOST_STORYBOOK_URL=http://localhost:9999 testcafe -c ${numCpus} "chrome:headless" -q ./**/ui.test.js`;
const RUN_PLAYWRIGHT = 'cross-env SB_URL=http://localhost:9999 playwright test';

const sbStaticPath = path.resolve(__dirname, '../storybook-static');

const { result } = concurrently(
  [
    {
      command: `http-server ${sbStaticPath} -s -p 9999`,
      name: 'SB',
      prefixColor: 'magenta',
    },
    {
      command: `wait-on tcp:9999 && ${RUN_PLAYWRIGHT}`,
      name: 'TEST',
      prefixColor: 'blue',
    },
  ],
  {
    successCondition: 'first',
    killOthers: ['failure', 'success'],
  }
);

result.then();
