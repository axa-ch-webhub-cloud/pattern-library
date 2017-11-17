import on from '../../../js/on';
import outer from '../../../js/outer';
import classList from '../../../js/class-list';

class SubNavigation {
  static DEFAULTS = {
    list: '.m-main-navigation__list',
    listItem: 'm-main-navigation__list-item',
    listLink: 'm-main-navigation__list-link',
    subNavigation: 'm-sub-navigation',
    closeButton: 'm-sub-navigation__index-close',
    stateClass: 'is-open'
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...SubNavigation.DEFAULTS,
      ...options
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

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
    const isSame = listItem === this.lastOpen;

    this.close();

    if (!isSame) {
      this.open(listItem);
    }
  }

  handleClose(e) {
    e.preventDefault();

    this.close();
  }

  open(dom) {
    classList.add(dom, this.options.stateClass);
    this.lastOpen = dom;

    this.onInteractive();
  }

  close() {
    if (this.lastOpen) {
      classList.remove(this.lastOpen, this.options.stateClass);
      delete this.lastOpen;
    }

    this.offInteractive();
  }

  destroy() {
    this.off();
  }
}

export default SubNavigation;
