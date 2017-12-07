import EventManager from './event-manager';
import Enum from '../../../js/enum';

const states = Enum('IS_IN_FLOW', 'IS_STICKY', 'IS_TOP', 'IS_BOTTOM');

class Sticky {
  constructor(rootNode) {
    this.rootNode = rootNode;

    this.state = states.IS_IN_FLOW;
    this.eventManagerInstance = EventManager();
  }

  set contextNode(value) {
    this._contextNode = value;
  }
}

export default Sticky;
