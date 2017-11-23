import UiObserver from '../../../js/ui-observer';
import { add, remove } from '../../../js/class-list';

class DropDown {
  static DEFAULTS = {
    containerClass: '.js-dropdown',
    toggleClass: 'js-dropdown__toggle',
    isOpenClass: 'is-open',
  }

  constructor(rootNode, options) {
    this.options = {
      ...DropDown.DEFAULTS,
      ...options,
    };
    this.rootNode = rootNode;

    this.init();
  }

  init() {
    this.observer = new UiObserver(this.rootNode, this.options);

    this.on();
  }

  on() {
    this.off();

    this.unObserve = this.observer.subscribe(this);
  }

  off() {
    if (this.unObserve) {
      this.unObserve();
    }
  }

  enter(node) {
    const { parentNode } = node;
    const { lastElementChild } = parentNode;
    const { scrollHeight } = lastElementChild;

    lastElementChild.style.height = `${scrollHeight}px`;

    add(parentNode, 'is-open');
  }

  leave(node) {
    const { parentNode } = node;
    const { lastElementChild } = parentNode;

    lastElementChild.style.height = 0;

    remove(parentNode, 'is-open');
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

export default DropDown;
