import Enum from '../../../js/enum';
import on from '../../../js/on';
import outer from '../../../js/outer';

const DYNAMIC_PROPS = Enum('UN_CLICK', 'UN_OUTER_CLICK', 'UN_CLOSE_CLICK', 'click', 'enter', 'move', 'leave');

const cache = {};

class MenuObserver {
  static DEFAULTS = {
    list: '.m-main-navigation__list',
    listLink: 'm-main-navigation__list-link',
    closeButton: 'm-sub-navigation__index-close'
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...MenuObserver.DEFAULTS,
      ...options,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.receivers = [];

    this.init();
  }

  init() {
    this.list = this.rootNode.querySelector(this.options.list);

    this.on();
  }

  on() {
    this.off();

    this[DYNAMIC_PROPS.UN_CLICK] = on(this.list, DYNAMIC_PROPS.CLICK, this.options.listLink, this.handleClick);
  }

  off() {
    if (DYNAMIC_PROPS.UN_CLICK in this) {
      this[DYNAMIC_PROPS.UN_CLICK]();
    }

    this.offInteractive();
  }

  onInteractive() {
    this.offInteractive();

    this[DYNAMIC_PROPS.UN_OUTER_CLICK] = outer(this.list, DYNAMIC_PROPS.CLICK, this.handleClose);
    this[DYNAMIC_PROPS.UN_CLOSE_CLICK] = on(this.list, DYNAMIC_PROPS.CLICK, this.options.closeButton, this.handleClose);
  }

  offInteractive() {
    if (DYNAMIC_PROPS.UN_OUTER_CLICK in this) {
      this[DYNAMIC_PROPS.UN_OUTER_CLICK]();
    }

    if (DYNAMIC_PROPS.UN_CLOSE_CLICK in this) {
      this[DYNAMIC_PROPS.UN_CLOSE_CLICK]();
    }
  }

  handleClick(e, delegateTarget) {
    e.preventDefault();

    const listItem = delegateTarget.parentNode;
    const isEnter = !this.lastListItem;
    const isMove = listItem !== this.lastListItem;
    const isLeave = !isEnter && !isMove;

    if (isEnter) {
      this.notify(DYNAMIC_PROPS.ENTER, listItem);

      this.onInteractive();
    } else if (isMove) {
      this.notify(DYNAMIC_PROPS.MOVE, listItem, this.lastListItem);
    }

    this.lastListItem = listItem;

    if (isLeave) {
      this.notify(DYNAMIC_PROPS.LEAVE, listItem);

      this.offInteractive();

      if (this.lastListItem) {
        delete this.lastListItem;
      }
    }
  }

  handleClose(e) {
    e.preventDefault();

    if (this.lastListItem) {
      this.notify(DYNAMIC_PROPS.LEAVE, this.lastListItem);

      this.offInteractive();

      delete this.lastListItem;
    }
  }

  notify(name, listItem, lastListItem) {
    const length = this.receivers.length;

    for(let i=0; i<length; i++) {
      const receiver = this.receivers[i];

      if (name in receiver && typeof receiver.enter === 'function') {
        receiver[name](listItem, lastListItem);
      }
    }
  }

  register(receiver) {
    this.receivers.push(receiver);
  }

  deregister(receiver) {
    const index = this.receivers.indexOf(receiver);

    if (index !== -1) {
      this.receivers.slice(index, 1);
    }
  }

  destroy() {
    this.off();
    delete this.receivers;
  }
}

function getInstance(rootNode, options) {
  if (!cache[rootNode]) {
    cache[rootNode] = new MenuObserver(rootNode, options);
  }

  return cache[rootNode];
}

export default getInstance;

