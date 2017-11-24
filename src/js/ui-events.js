import Enum from './enum';
import on from './on';
import outer from './outer';
import { freeByValue } from './free';

const EVENTS = Enum('click', 'keyup', 'enter', 'move', 'leave', 'Escape', 'Esc');

class UiEvents {
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
      ...UiEvents.DEFAULTS,
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

    this.unClick = on(this.container, EVENTS.CLICK, this.options.toggleClass, this.handleClick);
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
      this.unCloseClick = on(this.container, EVENTS.CLICK, this.options.closeClass, this.handleClose);
    }

    if (this.options.outerClose) {
      this.unOuterClick = outer(this.container, EVENTS.CLICK, this.handleClose);
    }

    if (this.options.escapeClose) {
      this.unCloseEscape = on(this.container.ownerDocument, EVENTS.KEYUP, this.handleKeyUp);
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
      this.notify(EVENTS.ENTER, toggleNode);

      this.onInteractive();
    } else if (isMove) {
      this.notify(EVENTS.MOVE, toggleNode, this.lastToggleNode);
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
    const isEscape = e.key === EVENTS.ESCAPE || e.key === EVENTS.ESC || e.keyCode === 27;

    if (isEscape) {
      e.preventDefault();

      this.close();
    }
  }

  close() {
    if (this.lastToggleNode) {
      this.notify(EVENTS.LEAVE, this.lastToggleNode);

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

  subscribe(receiver) {
    this.receivers.push(receiver);

    return unsubscribe;

    function unsubscribe() {
      const index = this.receivers.indexOf(receiver);

      if (index !== -1) {
        this.receivers.slice(index, 1);
      }

      freeByValue(receiver, unsubscribe);
    }
  }

  destroy() {
    this.off();

    delete this.rootNode;
    delete this.options;
    delete this.receivers;
  }
}

export default UiEvents;

