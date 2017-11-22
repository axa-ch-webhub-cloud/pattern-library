import { add, remove } from '../../../js/class-list';
import getUiObserver from '../../../js/ui-observer';

class SubNavigation {
  static DEFAULTS = {
    list: '.js-main-navigation__list',
    stateClass: 'is-open',
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...SubNavigation.DEFAULTS,
      ...options,
    };

    this.init();
  }

  init() {
    this.list = this.rootNode.querySelector(this.options.list);

    this.observer = getUiObserver(this.rootNode, {
      containerClass: '.js-main-navigation__list',
      toggleClass: 'js-main-navigation__list-link',
      closeClass: 'js-sub-navigation__index-close',
    });

    this.on();
  }

  on() {
    this.unObserve = this.observer.register(this);
  }

  off() {
    if (this.unObserve) {
      this.unObserve();
    }
  }

  enter(node) {
    add(node.parentNode, this.options.stateClass);
  }

  move(node, lastNode) {
    remove(lastNode.parentNode, this.options.stateClass);
    add(node.parentNode, this.options.stateClass);
  }

  leave(node) {
    remove(node.parentNode, this.options.stateClass);
  }

  destroy() {
    this.off();

    if (this.observer) {
      this.observer.destroy();
      delete this.observer;
    }

    delete this.rootNode;
    delete this.options;
  }
}

export default SubNavigation;
