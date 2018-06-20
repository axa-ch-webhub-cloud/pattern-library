import UiEvents, { EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove } from '../../../js/class-list';

class DropDown extends UiEvents {
  static DEFAULTS = {
    containerClass: '.js-dropdown',
    toggleClass: 'js-dropdown__toggle',
    isOpenClass: 'is-dropdown-open',
    isAnimatingClass: 'is-dropdown-animating',
    selectClass: 'js-dropdown__content',
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

  onClicks() {
    this.offClicks();
    this.unClickEnd = on(this.wcNode, EVENTS.TAP, this.options.selectClass, this.handleClick, { capture: true, passive: false });
  }

  offInteractive() {
    if (this.unTransitionEnd) {
      this.unTransitionEnd();
    }
  }

  offClicks() {
    if (this.unClickEnd) {
      this.unClickEnd();
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
    this.onClicks();

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
    this.onClicks();

    add(parentNode, this.options.isAnimatingClass);

    requestAnimationFrame(() => {
      lastElementChild.style.height = `${scrollHeight}px`;

      requestAnimationFrame(() => {
        remove(parentNode, this.options.isOpenClass);
        lastElementChild.style.height = 0;
      });
    });
  }

  _removeHeightOnElement(node) {
    if (this.isOpen) {
      node.style.height = '';
    }
  }

  handleTransitionEnd = (e) => {
    if (e.propertyName === 'height') {
      this._removeHeightOnElement(e.target);

      this.offInteractive();

      remove(this.wcNode, this.options.isAnimatingClass);
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.offClicks();
    const isTheSame = this.wcNode.getAttribute('value') === e.target.dataset.index;

    if (isTheSame) {
      this.leave(this.lastToggleNode);
      this.deleteLastToggleNode();
    } else {
      const { index } = e.target.dataset;
      this.wcNode.setAttribute('value', index);
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
