import EventManager from './event-manager';

class Sticky {
  constructor(rootNode) {
    this.rootNode = rootNode;

    this.eventManagerInstance = EventManager();
  }

  set contextNode(value) {
    this._contextNode = value;
  }
}

export default Sticky;
