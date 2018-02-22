import Enum from './enum';
import on from './on';
import outer from './outer';

const EVENTS = Enum('click', 'keyup', 'enter', 'move', 'leave', 'Escape', 'Esc');

class UiEvents {
  static DEFAULTS = {
    containerClass: '.js-ui-container',
    toggleClass: 'js-ui-toggle',
    closeClass: 'js-ui-close',
    escapeClose: true,
    outerClose: true,
    sameClickClose: true,
    useDefaultEvent: false,
  };

  constructor(wcNode, options = {}) {
    this._wcNode = wcNode;
    this._options = {
      ...UiEvents.DEFAULTS,
      ...options,
    };

    this._handleClick = this._handleClick.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);

    this._init();
  }

  _init() {
    const { containerClass } = this._options;

    this._container = containerClass ? this._wcNode.querySelector(containerClass) : this._wcNode;

    this._on();
  }

  _on() {
    this._off();

    this._unClick = on(this._container, EVENTS.CLICK, this._options.toggleClass, this._handleClick);
  }

  _off() {
    if (this._unClick) {
      this._unClick();
    }

    this._offInteractive();
  }

  _onInteractive() {
    this._offInteractive();

    if (this._options.closeClass) {
      this._unCloseClick = on(this._container, EVENTS.CLICK, this._options.closeClass, this._handleClose);
    }

    if (this._options.outerClose) {
      this._unOuterClick = outer(this._container, EVENTS.CLICK, this._handleClose);
    }

    if (this._options.escapeClose) {
      this._unCloseEscape = on(this._container.ownerDocument, EVENTS.KEYUP, this._handleKeyUp);
    }
  }

  _offInteractive() {
    if (this._unOuterClick) {
      this._unOuterClick();
    }

    if (this._unCloseClick) {
      this._unCloseClick();
    }

    if (this._unCloseEscape) {
      this._unCloseEscape();
    }

    delete this._lastToggleNode;
  }

  _handleClick(e, toggleNode) {
    if (!this._options.useDefaultEvent) {
      e.preventDefault();
    }

    const isEnter = !this._lastToggleNode;
    const isMove = toggleNode !== this._lastToggleNode;
    const isLeave = !isEnter && !isMove;

    if (isEnter) {
      this._notify(EVENTS.ENTER, toggleNode);

      this._onInteractive();
    } else if (isMove) {
      this._notify(EVENTS.MOVE, toggleNode, this._lastToggleNode);
    }

    this._lastToggleNode = toggleNode;

    if (isLeave && this._options.sameClickClose) {
      this._close();
    }
  }

  _handleClose(e) {
    if (!this._options.useDefaultEvent) {
      e.preventDefault();
    }

    this._close();
  }

  _handleKeyUp(e) {
    const isEscape = e.key === EVENTS.ESCAPE || e.key === EVENTS.ESC || e.keyCode === 27;

    if (isEscape) {
      e.preventDefault();

      this._close();
    }
  }

  _close() {
    if (this._lastToggleNode) {
      this._notify(EVENTS.LEAVE, this._lastToggleNode);

      this._offInteractive();

      delete this._lastToggleNode;
    }
  }

  _notify(name, toggleNode, lastToggleNode) {
    if (name in this && typeof this[name] === 'function') {
      this[name](toggleNode, lastToggleNode);
    }
  }

  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  enter(toggleNode) {
    throw new Error('UiEvent.enter method not overwritten');
  }

  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  move(toggleNode, lastToggleNode) {
  }

  // eslint-disable-next-line no-unused-vars, class-methods-use-this
  leave(toggleNode) {
    throw new Error('UiEvent.leave method not overwritten');
  }

  destroy() {
    this._off();

    delete this._wcNode;
    delete this._options;
  }
}

export default UiEvents;
