import EventManager from './event-manager';

class StickyContainer {
  constructor(rootNode) {
    this.roodNode = rootNode;

    this.eventManagerInstance = EventManager();
  }
}

export default StickyContainer;
