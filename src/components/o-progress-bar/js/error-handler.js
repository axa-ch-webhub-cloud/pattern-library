const ERROR = 'error';
const WARNING = 'warning';
const INFORMATION = 'information';

export class Log {
  constructor(timestamp = new Date(), message = '') {
    this.timestamp = timestamp;
    this.message = message;
    this.priority = '';
    this.priorityName = '';
  }
  print() {
    console.log(`${this.timestamp} priority: ${this.priority} type: ${this.priorityName}\n${this.message} `);
  }
}

export class Information extends Log {
  constructor(timestamp = new Date(), message = '') {
    super(timestamp, message);
    this.priority = 0;
    this.priorityName = INFORMATION;
  }
}

export class Warning extends Log {
  constructor(timestamp = new Date(), message = '') {
    super(timestamp, message);
    this.priority = 1;
    this.priorityName = WARNING;
  }
}

export class Error extends Log {
  constructor(timestamp = new Date(), message = '') {
    super(timestamp, message);
    this.priority = 2;
    this.priorityName = ERROR;
  }
  print() {
    console.error(`${this.timestamp} priority: ${this.priority} type: ${this.priorityName}\n${this.message} `);
  }
}
