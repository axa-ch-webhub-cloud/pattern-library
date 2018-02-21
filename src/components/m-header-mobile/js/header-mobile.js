import on from '../../../js/on';
import preventOverscroll from '../../../js/prevent-overscroll';
import { add, remove } from '../../../js/class-list';
import { publish, subscribe } from '../../../js/pubsub';

class HeaderMobile {
  static DEFAULTS = {
    canvas: '.js-header-mobile__canvas',
    backdrop: '.js-header-mobile__backdrop',
    close: 'js-header-mobile-close',
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

    this.opened = [];

    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.init();
  }

  init() {
    this.canvas = this.rootNode.querySelector(this.options.canvas);
    this.backdrop = this.rootNode.querySelector(this.options.backdrop);
  }

  set contextNode(value) {
    this._contextNode = value;

    this.onContextEnabled();
  }

  on() {
    this.off();

    this.offOverscroll = preventOverscroll(this.rootNode);
    this.unBackdropClick = on(this.backdrop, 'click', this.handleCloseClick);
    this.unClose = on(this.canvas, 'click', this.options.close, this.handleCloseClick);
  }

  off() {
    if (this.offOverscroll) {
      this.offOverscroll();
    }

    if (this.unBackdropClick) {
      this.unBackdropClick();
    }

    if (this.unClose) {
      this.unClose();
    }
  }

  onContextEnabled() {
    // check if context is ready
    if (this._contextNode) {
      this.offContextEnabled();

      this.unSubscribeOpen = subscribe('header-mobile/open', this.open, this._contextNode);
      this.unSubscribeClose = subscribe('header-mobile/close', this.close, this._contextNode);
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

    this.on();
  }

  close() {
    this.off();

    if (this.unTransitionEndBackdrop) {
      this.unTransitionEndBackdrop();
    }

    this.unTransitionEndBackdrop = on(this.backdrop, 'transitionend', ({ propertyName }) => {
      if (propertyName === 'opacity') {
        this.unTransitionEndBackdrop();
        remove(this.backdrop, this.options.isBackdropFading);

        // reset initial scroll and menu state
        this.canvas.scrollTop = 0;

        publish('header-mobile/fade-finish', null, this._contextNode);
      }
    });

    add(this.backdrop, this.options.isBackdropFading);
    remove(this.rootNode, this.options.isMenuOpenClass);
    remove(document.body, this.options.isBodyFrozen);
  }

  handleCloseClick() {
    publish('header-mobile/close', null, this._contextNode);
  }

  destroy() {
    this.off();
    this.offContextEnabled();

    delete this.rootNode;
    delete this.canvas;
    delete this.backdrop;
    delete this._contextNode;
  }
}

export default HeaderMobile;
