import UiEvents from '../../../js/ui-events';
import on from '../../../js/on';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
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

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);

    this.init();
  }

  init() {
    this.observer = new UiEvents(this.rootNode, this.options);

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

  onInteractive() {
    this.offInteractive();

    this.unTransitionEnd = on(this.rootNode, 'transitionend', this.handleTransitionEnd);
  }

  offInteractive() {
    if (this.unTransitionEnd) {
      this.unTransitionEnd();
    }
  }

  enter(node) {
    const { parentNode } = node;
    const { lastElementChild } = parentNode;
    const { scrollHeight } = lastElementChild;

    this.onInteractive();

    lastElementChild.style.height = `${scrollHeight}px`;

    add(parentNode, 'is-open');
  }

  leave(node) {
    const { parentNode } = node;
    const { lastElementChild } = parentNode;
    const { scrollHeight } = lastElementChild;

    this.offInteractive();

    requestAnimationFrame(() => {
      lastElementChild.style.height = `${scrollHeight}px`;

      requestAnimationFrame(() => {
        remove(parentNode, 'is-open');
        lastElementChild.style.height = 0;
      });
    });
  }

  handleTransitionEnd(e) {
    if (e.propertyName === 'height') {
      e.target.style.height = '';

      this.offInteractive();
    }
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
