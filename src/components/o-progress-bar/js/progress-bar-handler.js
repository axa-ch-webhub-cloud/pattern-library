import { Error, Warning, Information } from './error-handler';

const LOWEST_PRIORITY = 2;

export default class ProgressBarHandler {
  constructor(wcNode, priority) {
    this.wcNode = wcNode;
    this.priority = priority;
    this.logs = [];

    this.init();
  }

  init() {
    this.logs.push(new Warning(new Date(), 'das ist die message'));
    this.logs.map(log => log.print());
  }
}
