import { Error, Warning, Information } from './error-handler';

const LOWEST_PRIORITY = 2;

export default class ProgressBarHandler {
  constructor(wcNode, priority = LOWEST_PRIORITY) {
    this.wcNode = wcNode;
    this.priority = priority;
    this.logs = [];
  }

  init() {
    this.logs.push(new Warning(Date.now(), 'das ist die message'));
    this.logs.map(log => log.print());
  }
}
