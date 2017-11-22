import Enum from './enum';
import on from './on';
import outer from './outer';
import { freeByValue } from './free';

const DYNAMIC_PROPS = Enum('click', 'keyup', 'enter', 'move', 'leave', 'Escape', 'Esc');

const cache = {};
const count = {};

class UiObserver {
  static DEFAULTS = {
    containerClass: '.js-ui-container',
    toggleClass: 'js-ui-toggle',
    closeClass: 'js-ui-close',
    escapeClose: true,
    outerClose: true,
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...UiObserver.DEFAULTS,
      ...options,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    this.receivers = [];

    this.init();
  }

  init() {
    const { containerClass } = this.options;

    this.container = containerClass ? this.rootNode.querySelector(containerClass) : this.rootNode;

    this.on();
  }

  on() {
    this.off();

    this.unClick = on(this.container, DYNAMIC_PROPS.CLICK, this.options.toggleClass, this.handleClick);
  }

  off() {
    if (this.unClick) {
      this.unClick();
    }

    this.offInteractive();
  }

  onInteractive() {
    this.offInteractive();

    if (this.options.closeClass) {
      this.unCloseClick = on(this.container, DYNAMIC_PROPS.CLICK, this.options.closeClass, this.handleClose);
    }

    if (this.options.outerClose) {
      this.unOuterClick = outer(this.container, DYNAMIC_PROPS.CLICK, this.handleClose);
    }

    if (this.options.escapeClose) {
      this.unCloseEscape = on(this.container.ownerDocument, DYNAMIC_PROPS.KEYUP, this.handleKeyUp);
    }
  }

  offInteractive() {
    if (this.unOuterClick) {
      this.unOuterClick();
    }

    if (this.unCloseClick) {
      this.unCloseClick();
    }

    if (this.unCloseEscape) {
      this.unCloseEscape();
    }

    delete this.lastToggleNode;
  }

  handleClick(e, toggleNode) {
    e.preventDefault();

    const isEnter = !this.lastToggleNode;
    const isMove = toggleNode !== this.lastToggleNode;
    const isLeave = !isEnter && !isMove;

    if (isEnter) {
      this.notify(DYNAMIC_PROPS.ENTER, toggleNode);

      this.onInteractive();
    } else if (isMove) {
      this.notify(DYNAMIC_PROPS.MOVE, toggleNode, this.lastToggleNode);
    }

    this.lastToggleNode = toggleNode;

    if (isLeave) {
      this.close();
    }
  }

  handleClose(e) {
    e.preventDefault();

    this.close();
  }

  handleKeyUp(e) {
    const isEscape = e.key === DYNAMIC_PROPS.ESCAPE || e.key === DYNAMIC_PROPS.ESCAPE.ESC || e.keyCode === 27;

    if (isEscape) {
      e.preventDefault();

      this.close();
    }
  }

  close() {
    if (this.lastToggleNode) {
      this.notify(DYNAMIC_PROPS.LEAVE, this.lastToggleNode);

      this.offInteractive();

      delete this.lastToggleNode;
    }
  }

  notify(name, toggleNode, lastToggleNode) {
    const { length } = this.receivers;

    for (let i = 0; i < length; i++) {
      const receiver = this.receivers[i];

      if (name in receiver && typeof receiver[name] === 'function') {
        receiver[name](toggleNode, lastToggleNode);
      }
    }
  }

  register(receiver) {
    this.receivers.push(receiver);

    return deregister;

    function deregister() {
      const index = this.receivers.indexOf(receiver);

      if (index !== -1) {
        this.receivers.slice(index, 1);
      }

      freeByValue(receiver, deregister);
    }
  }

  destroy() {
    if (this.rootNode && this.rootNode in count) {
      // eslint-disable-next-line no-plusplus
      count[this.rootNode]--;

      if (count[this.rootNode] <= 0) {
        this.off();

        delete cache[this.rootNode];
        delete count[this.rootNode];

        delete this.rootNode;
        delete this.options;
        delete this.receivers;
      }
    }
  }
}

function getInstance(rootNode, options) {
  if (!cache[rootNode]) {
    cache[rootNode] = new UiObserver(rootNode, options);
    count[rootNode] = 0;
  }

  // eslint-disable-next-line no-plusplus
  count[rootNode]++;

  return cache[rootNode];
}

export default getInstance;

