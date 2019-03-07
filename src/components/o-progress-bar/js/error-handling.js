const ERROR = 'Error';
const WARNING = 'Warning';
const Information = 'Information';

export default class ErrorHandling {
  constructor(logLevel = 2) {
    this.logLevel = logLevel;
    this.init();
  }

  init() {
    this.log = [];
    this.error = 0;
    this.warning = 1;
    this.information = 2;
  }
}
