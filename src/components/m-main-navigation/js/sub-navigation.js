import on from '../../../js/on';
import classList from '../../../js/class-list';

class SubNavigation {
  static DEFAULTS = {
    list: '.m-main-navigation__list',
    listItem: 'm-main-navigation__list-item',
    subNavigation: 'm-sub-navigation',
    stateClass: 'is-open'
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...SubNavigation.DEFAULTS,
      ...options
    };
    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  init() {
    this.list = this.rootNode.querySelector(this.options.list);

    this.on();
  }

  on() {
    this.off();

    this.unlisten = on(this.list, 'click', this.options.listItem, this.handleClick);
  }

  off() {
    if ('unlisten' in this) {
      this.unlisten();
      delete this.unlisten;
    }
  }

  handleClick(e, delegateTarget) {
    e.preventDefault();

    const isSame = delegateTarget === this.lastOpen;

    this.close();

    if (!isSame) {
      this.open(delegateTarget);
    }
  }

  open(dom) {
    classList.add(dom, this.options.stateClass);
    this.lastOpen = dom;
  }

  close() {
    if (this.lastOpen) {
      classList.remove(this.lastOpen, this.options.stateClass);
      delete this.lastOpen;
    }
  }

  destroy() {
    this.off();
  }
}

export default SubNavigation;
