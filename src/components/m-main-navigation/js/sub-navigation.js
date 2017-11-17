import classList from '../../../js/class-list';
import getMenuObserver from './menu-observer';

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

    this.init();
  }

  init() {
    this.list = this.rootNode.querySelector(this.options.list);

    this.observer = getMenuObserver(this.rootNode);

    this.on();
  }

  on() {
    this.observer.notify(this);
  }

  off() {
    this.observer.denotify(this);
  }

  enter(dom) {
    classList.add(dom, this.options.stateClass);
  }

  move(newDom, lastDom) {
    classList.remove(lastDom, this.options.stateClass);
    classList.add(newDom, this.options.stateClass);
  }

  leave(dom) {
    classList.remove(dom, this.options.stateClass);
  }

  destroy() {
    this.off();

    if ('observer' in this) {
      this.observer.destroy();
      delete this.observer;
    }
  }
}

export default SubNavigation;
