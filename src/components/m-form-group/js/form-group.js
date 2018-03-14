import UiEvents from '../../../js/ui-events';
import on from '../../../js/on';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import {
  add,
  remove,
} from '../../../js/class-list';

class FormGroup extends UiEvents {
  static DEFAULTS = {
    containerClass: false,
    toggle: '.js-form-group-info__toggle',
    info: '.js-form-group__info',
    labelIconWrapper: '.js-form-group__label-icon-wrapper',
    isOpen: 'is-form-group-info-open',
  };

  constructor(wcNode, options) {
    // eslint-disable-next-line no-param-reassign
    options = {
      ...FormGroup.DEFAULTS,
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
    this.info = this.wcNode.querySelector(this.options.info);

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

  onInteractive() {
    this.offInteractive();

    this.unTransitionEnd = on(this.info, 'transitionend', this.handleTransitionEnd);
  }

  offInteractive() {
    if (this.unTransitionEnd) {
      this.unTransitionEnd();
    }
  }


  toggleState() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
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

  handleToggleClick() {
    this.toggleState();
  }

  destroy() {
    super.destroy();

    this.off();
    this.offInteractive();

    delete this.wcNode;
    delete this.options;
  }
}

export default FormGroup;
