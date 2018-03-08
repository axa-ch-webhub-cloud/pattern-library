'use strict';

var webdriver = require('selenium-webdriver');
var browserstack = require('browserstack-local');

var config_file = '../../conf/' + (process.env.CONFIG_FILE || 'single') + '.conf.js';
var config = require(config_file).config;

var username = process.env.BROWSERSTACK_USERNAME || config.user;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY || config.key;

var createBrowserStackSession = function(config, caps){
  return new webdriver.Builder().
    usingServer('http://'+config.server+'/wd/hub').
    withCapabilities(caps).
    build();
}

var myHooks = function () {
  var bs_local = null;

  this.Before(function (scenario, callback) {
    var world = this;
    var task_id = parseInt(process.env.TASK_ID || 0);
    var caps = config.capabilities[task_id];
    caps['browserstack.user'] = username;
    caps['browserstack.key'] = accessKey;

    if(caps["browserstack.local"]){
      // Code to start browserstack local before start of test and stop browserstack local after end of test
      bs_local = new browserstack.Local();
      bs_local.start({'key': accessKey }, function(error) {
        if (error) return console.log(error.red);

        world.driver = createBrowserStackSession(config, caps);
        callback();
      });
    }
    else {
      world.driver = createBrowserStackSession(config, caps);
      callback();
    }
  });

  this.After(function(scenario, callback){
    this.driver.quit().then(function(){
      if(bs_local){
        bs_local.stop(callback);
      }
      else callback();
    });
  });
};

module.exports = myHooks;
