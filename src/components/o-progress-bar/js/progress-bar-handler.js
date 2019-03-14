import { Error, Warning, Information } from './error-handler';

const LOWEST_PRIORITY = 2;

export default class ProgressBarHandler {
  constructor(priority = LOWEST_PRIORITY) {
    this.priority = priority;
    this.value = 0;
    this.max = 0;
    this.logs = [];
  }

  init(value, max) {
    this.value = value;
    this.max = max;
  }

  testComponent() {
    if (Math.sign(this.value) < 0) {
      this.logs.push(new Error(Date.now(), `value ${this.value} is negative`));
    }
    if (Math.sign(this.max) < 0) {
      this.logs.push(new Error(Date.now(), `max ${this.max} is negative`));
    }

    if (this.value > this.max) {
      if ((this.max === undefined || this.max === null) && this.value > 1) {
        this.logs.push(new Information(Date.now(), 'indeterminate state is not realised'));
      } else if (this.max !== undefined && this.max !== null) {
        this.logs.push(new Warning(Date.now(), `value ${this.value} is bigger than max ${this.max}`));
      }
    }
  }

  printMessages() {
    this.logs.forEach((log) => {
      if (this.priority >= log.priority) {
        log.print();
      }
    });
  }
}
