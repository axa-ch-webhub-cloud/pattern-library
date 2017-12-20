import on from '../../../js/on';
import { add, remove } from '../../../js/class-list';
import { subscribe } from '../../../js/pubsub';

class HeaderMobileNavigation {
  static DEFAULTS = {
    nav: '.js-header-mobile-navigation__nav',
    category: 'js-header-mobile-navigation__category',
    back: 'js-header-mobile-navigation__back',
    isSubMenuOpenClass: 'is-mobile-sub-menu-open',
  }

  constructor(rootNode, options) {
    this.rootNode = rootNode;
    this.options = {
      ...HeaderMobileNavigation.DEFAULTS,
      ...options,
    };

    this.isOpen = false;
    this.opened = [];

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.fadeFinish = this.fadeFinish.bind(this);

    this.init();
  }

  init() {
    this.nav = this.rootNode.querySelector(this.options.nav);

    this.on();
  }

  set contextNode(value) {
    this._contextNode = value;

    this.onContextEnabled();
  }

  on() {
    this.off();

    this.unCategoryClick = on(this.nav, 'click', this.options.category, this.handleCategoryClick);
    this.unBackClick = on(this.nav, 'click', this.options.back, this.handleBackClick);
  }

  off() {
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

      this.unSubscribeOpen = subscribe('header-mobile/open', this.open, this._contextNode);
      this.unSubscribeClose = subscribe('header-mobile/close', this.close, this._contextNode);
      this.unSubscribeFadeFinish = subscribe('header-mobile/fade-finish', this.fadeFinish, this._contextNode);
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
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  fadeFinish() {
    if (this.isOpen) {
      return;
    }

    // reset initial scroll and menu state
    let open = this.opened.pop();

    while (open) {
      const { parentNode } = open;
      remove(parentNode, this.options.isSubMenuOpenClass);

      open = this.opened.pop();
    }
  }

  handleCategoryClick(e, delegateTarget) {
    e.preventDefault();

    const { parentNode } = delegateTarget;

    if (parentNode.lastChild !== delegateTarget) {
      const canvas = this.rootNode.parentNode.parentNode;
      const { scrollTop } = canvas;

      add(parentNode, this.options.isSubMenuOpenClass);

      canvas.scrollTop = 0;

      this.opened.push({
        parentNode,
        scrollTop,
      });
    }
  }

  handleBackClick(e) {
    e.preventDefault();

    const { parentNode, scrollTop } = this.opened.pop();
    const canvas = this.rootNode.parentNode.parentNode;

    remove(parentNode, this.options.isSubMenuOpenClass);

    canvas.scrollTop = scrollTop;
  }

  destroy() {
    this.off();

    delete this.rootNode;
    delete this.nav;
    delete this._contextNode;
    delete this.opened;
  }
}

export default HeaderMobileNavigation;
