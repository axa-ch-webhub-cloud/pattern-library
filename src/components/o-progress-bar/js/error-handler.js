const ERROR = 'Error';
const WARNING = 'Warning';
const INFORMATION = 'Information';

export class Log {
  constructor(timestamp = new Date(), message = '') {
    this.timestamp = timestamp;
    this.message = message;
    this.priority = '';
    this.priorityName = '';
  }
  print() {
    console.log(this.timestamp, this.message, 'priority', this.priority, 'type ', this.priorityName);
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
    console.error(this.timestamp, this.message, 'priority', this.priority, 'type ', this.priorityName);
  }
}
