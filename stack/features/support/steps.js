const assert = require('cucumber-assert');
const webdriver = require('selenium-webdriver');

const { When, Then } = require('cucumber');

When(/^I type query as "([^"]*)"$/, function setTo(searchQuery, next) {
  console.log('this.server', this.testServer)
  this.driver.get(this.testServer);
  this.driver.findElement({
    name: 'q',
  }).sendKeys(`${searchQuery}\n`).then(next);
});

Then(/^I submit$/, function iSubmit(next) {
  this.driver.findElement({
    name: 'btnG',
  })
    .click()
    .then(() => {
      this.driver.wait(() => this.driver.isElementPresent(webdriver.By.id('top_nav')), 5000);
      next();
    });
});

Then(/^I should see title "([^"]*)"$/, function assertion(titleMatch, next) {
  this.driver.getTitle().then((title) => {
    assert.equal(title, titleMatch, next, `Expected title to be ${titleMatch}`);
  });
});
