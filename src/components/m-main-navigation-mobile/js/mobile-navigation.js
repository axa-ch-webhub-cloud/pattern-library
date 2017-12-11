import on from '../../../js/on';
import { add, remove } from '../../../js/class-list';
import { publish, subscribe } from '../../../js/pubsub';

class MobileNavigation {
  static DEFAULTS = {
    backdrop: '.js-m-main-navigation-mobile__backdrop',
    nav: '.js-main-navigation-mobile__nav',
    category: 'js-main-navigation-mobile__category',
    back: 'js-main-navigation-mobile__back',
    isMenuOpenClass: 'is-mobile-menu-open',
    isSubMenuOpenClass: 'is-mobile-sub-menu-open',
    isBackdropFading: 'is-mobile-backdrop-fading',
    isBodyFrozen: 'is-body-frozen',
  }

  constructor(rootNode, options) {
    this.rootNode = rootNode;
    this.options = {
      ...MobileNavigation.DEFAULTS,
      ...options,
    };

    this.opened = [];

    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.init();
  }

  init() {
    this.nav = this.rootNode.querySelector(this.options.nav);
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
    this.unCategoryClick = on(this.nav, 'click', this.options.category, this.handleCategoryClick);
    this.unBackClick = on(this.nav, 'click', this.options.back, this.handleBackClick);
  }

  off() {
    if (this.unBackdropClick) {
      this.unBackdropClick();
    }

    if (this.unCategoryClick) {
      this.unCategoryClick();
    }

    if (this.unBackClick) {
      this.unBackClick();
    }

    this.offContextEnabled();
  }

  onContextEnabled() {
    // check if context is ready
    if (this._contextNode) {
      this.offContextEnabled();

      this.unSubscribeOpen = subscribe('main-navigation-mobile/open', this.open, this._contextNode);
      this.unSubscribeClose = subscribe('main-navigation-mobile/close', this.close, this._contextNode);
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
        remove(this.backdrop, this.options.isBackdropFading);
        this.unTransitionEndBackdrop();
      }
    });

    add(this.backdrop, this.options.isBackdropFading);
    remove(this.rootNode, this.options.isMenuOpenClass);
    remove(document.body, this.options.isBodyFrozen);
  }

  handleBackdropClick(e) {
    publish('main-navigation-mobile/close', null, this._contextNode);
  }

  handleCategoryClick(e, delegateTarget) {
    e.preventDefault();

    const { parentNode } = delegateTarget;

    if (parentNode.lastChild !== delegateTarget) {
      add(parentNode, this.options.isSubMenuOpenClass);

      this.opened.push(parentNode);
    }
  }

  handleBackClick(e) {
    e.preventDefault();

    remove(this.opened.pop(), this.options.isSubMenuOpenClass);
  }

  destroy() {
    this.off();

    delete this.rootNode;
    delete this.nav;
    delete this.backdrop;
    delete this._contextNode;
    delete this.opened;
  }
}

export default MobileNavigation;
