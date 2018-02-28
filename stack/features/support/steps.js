const { Given, When, Then } = require('cucumber');
const { expect } = require('chai');

Given('a variable set to {int}', function setTo(number) {
  this.setTo(number);
});

When('I increment the variable by {int}', function incrementBy(number) {
  this.incrementBy(number);
});

Then('the variable should contain {int}', function assert(number) {
  expect(this.variable).to.eql(number);
});
