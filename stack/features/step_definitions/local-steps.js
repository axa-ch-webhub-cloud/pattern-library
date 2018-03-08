'use strict';

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function() {

  this.When(/^I open health check$/, function (next) {
    this.driver.get('http://bs-local.com:45691/check');
    next();
  });

  this.Then(/^I should see "([^"]*)"$/, function (sourceMatch, next) {
    this.driver.getPageSource()
      .then(function(source) {
        assert.equal(source.indexOf(sourceMatch) > -1, true, next, 'Expected source to contain ' + sourceMatch);
      });
  });
};
