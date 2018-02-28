const { setWorldConstructor } = require('cucumber');

class BrowserstackSupport {
  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }
}

setWorldConstructor(BrowserstackSupport);
