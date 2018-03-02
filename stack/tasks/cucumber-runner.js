#!/usr/bin/env node
const { spawn, exec } = require('child_process');
const constants = require('../constants');

const ENV = process.argv[2];

const configFile = `../conf/${(ENV === constants.ENV.PROD ? 'prod' : 'dev')}.conf.js`;
const { config } = require(configFile); // eslint-disable-line import/no-dynamic-require

process.argv[1] = './node_modules/.bin/cucumber-js';
process.argv[2] = './stack/features/single.feature';

let path = 'linux64/BrowserStackLocal';
path = process.platform === 'win32' ? 'win\\BrowserStackLocal.exe' : path;
path = process.platform === 'darwin' ? 'mac/BrowserStackLocal' : path;

exec(`./bin/${path}`, (error, stdout, stderr) => {
  if (error || stderr) {
    console.log(`exec error: ${error || stderr}`);
    process.exit(1);
  }
  Object.keys(config.capabilities).forEach((key, index) => {
    const env = Object.create(process.env);
    env.TASK_ID = index.toString();
    env.CONFIG_FILE = ENV.toLowerCase();

    console.log(process.argv, env);

    /* exec('CONFIG_FILE=prod ./stack/tasks/cucumber-runner.js ./stack/features/single.feature', (err, stdout, stderr) => {
      console.log(err, stdout, stderr);
    }); */

    const p = spawn('/usr/bin/env', process.argv, {
      env,
    });

    p.stdout.pipe(process.stdout);
  });
});
