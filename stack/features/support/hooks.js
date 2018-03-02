const { Before } = require('cucumber');
const webdriver = require('selenium-webdriver');
const browserstack = require('browserstack-local');

const configFile = `../../conf/${(process.env.CONFIG_FILE || 'dev')}.conf.js`;
const { config } = require(configFile); // eslint-disable-line import/no-dynamic-require

const username = process.env.BROWSERSTACK_USERNAME || config.user;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY || config.key;

const createBrowserStackSession = function createBrowserStackSession(_config, _caps) {
  return new webdriver.Builder().usingServer(`http://${config.server}/wd/hub`).withCapabilities(_caps).build();
};

const bsLocal = new browserstack.Local();

// Asynchronous Callback
Before(function bstackConnect(scenario, callback) {
  const setStriver = (caps) => {
    this.driver = createBrowserStackSession(config, caps);
    console.log(callback)
    callback();
  };
  const taskId = parseInt(process.env.TASK_ID || 0, 10);
  const caps = config.capabilities[taskId];
  this.testServer = config.testServer ? config.testServer : 'http://localhost:3000';
  caps['browserstack.user'] = username;
  caps['browserstack.key'] = accessKey;

  if (caps['browserstack.local']) {
    // Code to start browserstack local before start of test and stop browserstack local after end of test
    if (bsLocal.isRunning()) {
      setStriver(caps);
    } else {
      bsLocal.start({
        key: accessKey,
      }, (error) => {
        if (error) {
          console.log(error); // eslint-disable-line
          bsLocal.stop();
          process.exit(1);
        }
        setStriver(caps);
      });
    }
  } else {
    setStriver(caps);
  }
});
