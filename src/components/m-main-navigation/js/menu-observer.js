import on from '../../../js/on';
import outer from '../../../js/outer';

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

    this.unClick = on(this.list, 'click', this.options.listLink, this.handleClick);
  }

  off() {
    if ('unClick' in this) {
      this.unClick();
      delete this.unClick;
    }

    this.offInteractive();
  }

  onInteractive() {
    this.offInteractive();

    this.unOuterClick = outer(this.list, 'click', this.handleClose);
    this.unCloseClick = on(this.list, 'click', this.options.closeButton, this.handleClose);
  }

  offInteractive() {
    if ('unOuterClick' in this) {
      this.unOuterClick();
      delete this.unOuterClick;
    }

    if ('unCloseClick' in this) {
      this.unCloseClick();
      delete this.unCloseClick;
    }
  }

  handleClick(e, delegateTarget) {
    e.preventDefault();

    const listItem = delegateTarget.parentNode;
    const isEnter = !this.lastListItem;
    const isMove = listItem !== this.lastListItem;
    const isLeave = !isEnter && !isMove;

    if (isEnter) {
      this.call('enter', listItem);

      this.onInteractive();
    } else if (isMove) {
      this.call('move', listItem, this.lastListItem);
    }

    this.lastListItem = listItem;

    if (isLeave) {
      this.call('leave', listItem);

      if (this.lastListItem) {
        delete this.lastListItem;
      }
    }
  }

  handleClose(e) {
    e.preventDefault();

    if (this.lastListItem) {
      this.call('leave', this.lastListItem);

      delete this.lastListItem;
    }
  }

  call(name, listItem, lastListItem) {
    const length = this.receivers.length;

    for(let i=0; i<length; i++) {
      const receiver = this.receivers[i];

      if (name in receiver && typeof receiver.enter === 'function') {
        receiver[name](listItem, lastListItem);
      }
    }
  }

  notify(receiver) {
    this.receivers.push(receiver);
  }

  denotify(receiver) {
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

