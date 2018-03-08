#!/usr/bin/env node
const childProcess = require('child_process');
const constants = require('../constants');

const ENV = process.argv[2];

const configFile = `../conf/${(ENV === constants.ENV.PROD ? 'prod' : 'dev')}.conf.js`;
const { config } = require(configFile); // eslint-disable-line import/no-dynamic-require

process.argv[0] = 'node';
process.argv[1] = './node_modules/.bin/cucumber-js';

process.argv[2] = 'features/single.feature';

Object.keys(config.capabilities).forEach((key, index) => {
  const env = Object.create(process.env);
  env.TASK_ID = index.toString();
  env.CONFIG_FILE = 'parallel';

  const p = childProcess.spawn('/usr/bin/env', process.argv, {
    env,
  });
  p.stdout.pipe(process.stdout);
});
