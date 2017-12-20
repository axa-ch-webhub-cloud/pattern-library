import on from '../../../js/on';
import { add, remove } from '../../../js/class-list';
import { publish, subscribe } from '../../../js/pubsub';

class HeaderMobile {
  static DEFAULTS = {
    canvas: '.js-header-mobile-navigation__canvas',
    backdrop: '.js-m-header-mobile-navigation__backdrop',
    isMenuOpenClass: 'is-mobile-menu-open',
    isBackdropFading: 'is-mobile-backdrop-fading',
    isBodyFrozen: 'is-body-frozen',
  }

  constructor(rootNode, options) {
    this.rootNode = rootNode;
    this.options = {
      ...HeaderMobile.DEFAULTS,
      ...options,
    };

    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.init();
  }

  init() {
    this.canvas = this.rootNode.querySelector(this.options.canvas);
    this.backdrop = this.rootNode.querySelector(this.options.backdrop);

    this.on();
  }

  set contextNode(value) {
    this._contextNode = value;

    this.onContextEnabled();
  }

  on() {
    this.off();

    this.unBackdropClick = on(this.backdrop, 'click', this.handleBackdropClick);
  }

  off() {
    if (this.unBackdropClick) {
      this.unBackdropClick();
    }

    this.offContextEnabled();
  }

  onContextEnabled() {
    // check if context is ready
    if (this._contextNode) {
      this.offContextEnabled();

      this.unSubscribeOpen = subscribe('header-mobile-navigation/open', this.open, this._contextNode);
      this.unSubscribeClose = subscribe('header-mobile-navigation/close', this.close, this._contextNode);
    }
  }

  offContextEnabled() {
    if (this.unSubscribeOpen) {
      this.unSubscribeOpen();
    }

    if (this.unSubscribeClose) {
      this.unSubscribeClose();
    }
  }

  open() {
    add(document.body, this.options.isBodyFrozen);
    add(this.rootNode, this.options.isMenuOpenClass);
  }

  close() {
    if (this.unTransitionEndBackdrop) {
      this.unTransitionEndBackdrop();
    }
    this.unTransitionEndBackdrop = on(this.backdrop, 'transitionend', ({ propertyName }) => {
      if (propertyName === 'opacity') {
        this.unTransitionEndBackdrop();
        remove(this.backdrop, this.options.isBackdropFading);

        // reset initial scroll and menu state
        this.canvas.scrollTop = 0;
      }
    });

    add(this.backdrop, this.options.isBackdropFading);
    remove(this.rootNode, this.options.isMenuOpenClass);
    remove(document.body, this.options.isBodyFrozen);
  }

  handleBackdropClick() {
    publish('header-mobile-navigation/close', null, this._contextNode);
  }

  destroy() {
    this.off();

    delete this.rootNode;
    delete this.canvas;
    delete this.backdrop;
    delete this._contextNode;
  }
}

export default HeaderMobile;
