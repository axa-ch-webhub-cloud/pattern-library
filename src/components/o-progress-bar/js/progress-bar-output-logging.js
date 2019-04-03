import { Error, Warning, Information } from './log-level';

const LOWEST_PRIORITY = 2;

export default class ProgressBarOutputLogging {
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
      this.logs.push(new Error(Date.now(), `value ${this.value} is negative, wich is not a valid value`));
    }
    if (Math.sign(this.max) < 0) {
      this.logs.push(new Error(Date.now(), `max ${this.max} is negative, wich is not a valid value`));
    }
    if ((this.max === undefined || this.max === null) && this.value > 1) {
      this.logs.push(new Information(Date.now(), 'indeterminate state is not realised'));
    }
    if (this.max !== undefined && this.max !== null && parseInt(this.value, 10) > parseInt(this.max, 10)) {
      this.logs.push(new Warning(Date.now(), `value ${this.value} is bigger than max ${this.max}`));
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
