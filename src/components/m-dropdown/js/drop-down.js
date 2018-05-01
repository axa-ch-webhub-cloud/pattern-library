import UiEvents from '../../../js/ui-events';
import on from '../../../js/on';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove } from '../../../js/class-list';

class DropDown extends UiEvents {
  static DEFAULTS = {
    containerClass: '.js-dropdown',
    toggleClass: 'js-dropdown__toggle',
    isOpenClass: 'is-dropdown-open',
    isAnimatingClass: 'is-dropdown-animating',
  }

  constructor(wcNode, options) {
    // eslint-disable-next-line no-param-reassign
    options = {
      ...DropDown.DEFAULTS,
      ...options,
    };

    super(wcNode, options);

    this.options = options;
    this.wcNode = wcNode;
    this.isOpen = false;
  }

  onInteractive() {
    this.offInteractive();

    this.unTransitionEnd = on(this.wcNode, 'transitionend', this.handleTransitionEnd);
  }

  offInteractive() {
    if (this.unTransitionEnd) {
      this.unTransitionEnd();
    }
  }

  enter(node) {
    const { parentNode } = node;
    const { lastElementChild } = parentNode;

    if (this.isOpen) {
      return;
    }
    this.isOpen = true;

    add(parentNode, this.options.isAnimatingClass);

    lastElementChild.style.overflow = 'scroll';
    const { scrollHeight } = lastElementChild;
    lastElementChild.style.overflow = '';

    this.onInteractive();

    lastElementChild.style.height = `${scrollHeight}px`;

    add(parentNode, this.options.isOpenClass);
  }

  leave(node) {
    const { parentNode } = node;
    const { lastElementChild } = parentNode;
    const { scrollHeight } = lastElementChild;

    if (!this.isOpen) {
      return;
    }
    this.isOpen = false;

    this.onInteractive();

    add(parentNode, this.options.isAnimatingClass);

    requestAnimationFrame(() => {
      lastElementChild.style.height = `${scrollHeight}px`;

      requestAnimationFrame(() => {
        remove(parentNode, this.options.isOpenClass);
        lastElementChild.style.height = 0;
      });
    });
  }

  handleTransitionEnd = (e) => {
    if (e.propertyName === 'height') {
      if (this.isOpen) {
        e.target.style.height = '';
      }

      this.offInteractive();

      remove(this.wcNode, this.options.isAnimatingClass);
    }
  }

  reset() {
    const node = this.wcNode.querySelector(this.options.containerClass);

    if (node) {
      const { lastElementChild } = node;

      lastElementChild.style.height = '';
      remove(node, this.options.isOpenClass);
    }
  }

  destroy() {
    super.destroy();

    this.reset();

    delete this.wcNode;
    delete this.options;
  }
}

export default DropDown;
