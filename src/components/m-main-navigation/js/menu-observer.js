import Enum from '../../../js/enum';
import on from '../../../js/on';
import outer from '../../../js/outer';
import { freeByValue } from '../../../js/free';

const DYNAMIC_PROPS = Enum('UN_CLICK', 'UN_OUTER_CLICK', 'UN_CLOSE_CLICK', 'UN_CLOSE_ESCAPE', 'click', 'keyup', 'enter', 'move', 'leave');

const cache = {};
const count = {};

class MenuObserver {
  static DEFAULTS = {
    list: '.js-main-navigation__list',
    listLink: 'js-main-navigation__list-link',
    closeButton: 'js-sub-navigation__index-close',
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...MenuObserver.DEFAULTS,
      ...options,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

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
    this[DYNAMIC_PROPS.UN_CLOSE_ESCAPE] = on(this.list.ownerDocument, DYNAMIC_PROPS.KEYUP, this.handleKeyUp);
  }

  offInteractive() {
    if (DYNAMIC_PROPS.UN_OUTER_CLICK in this) {
      this[DYNAMIC_PROPS.UN_OUTER_CLICK]();
    }

    if (DYNAMIC_PROPS.UN_CLOSE_CLICK in this) {
      this[DYNAMIC_PROPS.UN_CLOSE_CLICK]();
    }

    if (DYNAMIC_PROPS.UN_CLOSE_ESCAPE in this) {
      this[DYNAMIC_PROPS.UN_CLOSE_ESCAPE]();
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
      this.close();
    }
  }

  handleClose(e) {
    e.preventDefault();

    this.close();
  }

  handleKeyUp(e) {
    const isEscape = 'key' in e ? (e.key === 'Escape' || e.key === 'Esc') : e.keyCode === 27;

    if (isEscape) {
      e.preventDefault();

      this.close();
    }
  }

  close() {
    if (this.lastListItem) {
      this.notify(DYNAMIC_PROPS.LEAVE, this.lastListItem);

      this.offInteractive();

      delete this.lastListItem;
    }
  }

  notify(name, listItem, lastListItem) {
    const { length } = this.receivers;

    for (let i = 0; i < length; i++) {
      const receiver = this.receivers[i];

      if (name in receiver && typeof receiver.enter === 'function') {
        receiver[name](listItem, lastListItem);
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
    cache[rootNode] = new MenuObserver(rootNode, options);
    count[rootNode] = 0;
  }

  // eslint-disable-next-line no-plusplus
  count[rootNode]++;

  return cache[rootNode];
}

export default getInstance;

