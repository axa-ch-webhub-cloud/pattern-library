'use strict';

var assert = require('cucumber-assert');
var webdriver = require('selenium-webdriver');

module.exports = function() {

  this.When(/^I type query as "([^"]*)"$/, function (searchQuery, next) {
    this.driver.get('https://www.google.com/ncr');
    this.driver.findElement({ name: 'q' })
      .sendKeys(searchQuery + '\n').then(next);
  });

  this.Then(/^I submit$/, function (next) {
    var self = this;
    this.driver.findElement({ name: 'btnG' })
      .click()
      .then(function() {
        self.driver.wait(function () {
          return self.driver.isElementPresent(webdriver.By.id("top_nav"));
        }, 5000);
        next();
      });
  });

  this.Then(/^I should see title "([^"]*)"$/, function (titleMatch, next) {
    this.driver.getTitle()
      .then(function(title) {
        assert.equal(title, titleMatch, next, 'Expected title to be ' + titleMatch);
      });
  });
};
