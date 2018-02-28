import UiEvents from '../../../js/ui-events';
import on from '../../../js/on';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import {
  add,
  remove,
} from '../../../js/class-list';
import {
  publish,
  subscribe,
} from '../../../js/pubsub';

class AccordionItem extends UiEvents {
  static DEFAULTS = {
    toggle: '.js-accordion-item__toggle',
    body: '.js-accordion-item__body',
    isOpen: 'is-accordion-item-open',
  };

  constructor(wcNode, options) {
    // eslint-disable-next-line no-param-reassign
    options = {
      ...AccordionItem.DEFAULTS,
      ...options,
    };

    super(wcNode, options);

    this.isOpen = false;

    this.options = options;
    this.wcNode = wcNode;

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.toggleState = this.toggleState.bind(this);

    this.init();
  }

  init() {
    this.toggle = this.wcNode.querySelector(this.options.toggle);
    this.body = this.wcNode.querySelector(this.options.body);

    this.on();
  }

  on() {
    this.off();

    this.offToggleClicked = on(this.toggle, 'click', this.handleToggleClick);
  }

  off() {
    if (this.offToggleClicked) {
      this.offToggleClicked();
    }
  }

  set contextNode(value) {
    this._contextNode = value;

    this.onContextEnabled();
  }

  onInteractive() {
    this.offInteractive();

    this.unTransitionEnd = on(this.body, 'transitionend', this.handleTransitionEnd);
  }

  offInteractive() {
    if (this.unTransitionEnd) {
      this.unTransitionEnd();
    }
  }


  toggleState({ detail: node }) {
    if (this.wcNode === node) {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    } else if (this.isOpen) {
      this.close();
    }
  }

  open() {
    const parentNode = this.wcNode;
    const { lastElementChild } = parentNode;

    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    lastElementChild.style.overflow = 'scroll';
    const { scrollHeight } = lastElementChild;
    lastElementChild.style.overflow = '';

    this.onInteractive();

    lastElementChild.style.height = `${scrollHeight}px`;

    add(parentNode, this.options.isOpen);
  }

  close() {
    const parentNode = this.wcNode;
    const { lastElementChild } = parentNode;
    const { scrollHeight } = lastElementChild;

    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    this.offInteractive();

    requestAnimationFrame(() => {
      lastElementChild.style.height = `${scrollHeight}px`;

      requestAnimationFrame(() => {
        remove(parentNode, this.options.isOpen);
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

  onContextEnabled() {
    if (this._contextNode) {
      this.offContextEnabled();

      this.unSubscribeToggle = subscribe('accordion-item/toggle', this.toggleState, this._contextNode);
    }
  }

  offContextEnabled() {
    if (this.unSubscribeToggle) {
      this.unSubscribeToggle();
    }
  }

  handleToggleClick() {
    publish('accordion-item/toggle', this.wcNode, this._contextNode);
  }

  destroy() {
    super.destroy();

    delete this.wcNode;
    delete this.options;
  }
}

export default AccordionItem;
