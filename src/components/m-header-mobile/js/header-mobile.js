import on from '../../../js/on';
import { add, remove } from '../../../js/class-list';
import { publish, subscribe } from '../../../js/pubsub';

class HeaderMobile {
  static DEFAULTS = {
    canvas: '.js-header-mobile-navigation__canvas',
    backdrop: '.js-m-header-mobile-navigation__backdrop',
    nav: '.js-header-mobile-navigation__nav',
    category: 'js-header-mobile-navigation__category',
    back: 'js-header-mobile-navigation__back',
    isMenuOpenClass: 'is-mobile-menu-open',
    isSubMenuOpenClass: 'is-mobile-sub-menu-open',
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

    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.init();
  }

  init() {
    this.canvas = this.rootNode.querySelector(this.options.canvas);
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

        let open = this.opened.pop();

        while (open) {
          const { parentNode } = open;
          remove(parentNode, this.options.isSubMenuOpenClass);

          open = this.opened.pop();
        }
      }
    });

    add(this.backdrop, this.options.isBackdropFading);
    remove(this.rootNode, this.options.isMenuOpenClass);
    remove(document.body, this.options.isBodyFrozen);
  }

  handleBackdropClick() {
    publish('header-mobile-navigation/close', null, this._contextNode);
  }

  handleCategoryClick(e, delegateTarget) {
    e.preventDefault();

    const { parentNode } = delegateTarget;

    if (parentNode.lastChild !== delegateTarget) {
      const { scrollTop } = this.canvas;

      add(parentNode, this.options.isSubMenuOpenClass);

      this.canvas.scrollTop = 0;

      this.opened.push({
        parentNode,
        scrollTop,
      });
    }
  }

  handleBackClick(e) {
    e.preventDefault();

    const { parentNode, scrollTop } = this.opened.pop();

    remove(parentNode, this.options.isSubMenuOpenClass);

    this.canvas.scrollTop = scrollTop;
  }

  destroy() {
    this.off();

    delete this.rootNode;
    delete this.canvas;
    delete this.nav;
    delete this.backdrop;
    delete this._contextNode;
    delete this.opened;
  }
}

export default HeaderMobile;
