import StickySpy from './sticky-spy';
import Enum from '../../../js/enum';

const states = Enum('IS_IN_FLOW', 'IS_STICKY', 'IS_TOP', 'IS_BOTTOM');

class Sticky {
  static DEFAULTS = {
    placeholderClass: 'js-sticky__placer',
    boxClass: 'js-sticky__box',
  }

  constructor(rootNode) {
    this.rootNode = rootNode;

    this.state = states.IS_IN_FLOW;
    this.spy = StickySpy();
  }

  set contextNode(value) {
    this._contextNode = value;
  }
}

export default Sticky;
