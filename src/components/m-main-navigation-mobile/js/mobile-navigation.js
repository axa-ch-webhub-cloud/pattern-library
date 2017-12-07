import on from '../../../js/on';
import { add, remove } from '../../../js/class-list';
import { subscribe } from '../../../js/pubsub';

class MobileNavigation {
  static DEFAULTS = {
    nav: '.js-main-navigation-mobile__nav',
    category: 'js-main-navigation-mobile__category',
    back: 'js-main-navigation-mobile__back',
    isOpenClass: 'is-open',
  }

  constructor(rootNode, options) {
    this.rootNode = rootNode;
    this.options = {
      ...MobileNavigation.DEFAULTS,
      ...options,
    };

    this.opened = [];

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.onContextEnabled = this.onContextEnabled.bind(this);
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);

    this.init();
  }

  init() {
    this.nav = this.rootNode.querySelector(this.options.nav);

    this.on();
  }

  on() {
    this.off();

    console.log('connectCallback MainNavigationMobile setup mobile menu and contextual node', this.rootNode.contextNode);

    this.unCategoryClick = on(this.nav, 'click', this.options.category, this.handleCategoryClick);
    this.unBackClick = on(this.nav, 'click', this.options.back, this.handleBackClick);
    this.unSubscribeContextEnabled = subscribe('oncontextenabled/axa-header', this.onContextEnabled);
  }

  off() {
    if (this.unCategoryClick) {
      this.unCategoryClick();
    }

    if (this.unBackClick) {
      this.unBackClick();
    }
  }

  onContextEnabled({ detail }) {
    this.offContextEnabled();

    console.log('context enabled');

    this.unSubscribeOpen = subscribe('main-navigation-mobile/open', this.open, detail);
    this.unSubscribeClose = subscribe('main-navigation-mobile/close', this.close, detail);
  }

  offContextEnabled() {
    if (this.unSubscribeContextEnabled) {
      this.unSubscribeContextEnabled();
    }

    if (this.unSubscribeOpen) {
      this.unSubscribeOpen();
    }

    if (this.unSubscribeClose) {
      this.unSubscribeClose();
    }
  }

  open() {
    console.log('open mobile menu');

    add(this.rootNode, this.options.isOpenClass);
  }

  close() {
    console.log('close mobile menu');

    remove(this.rootNode, this.options.isOpenClass);
  }

  handleCategoryClick(e, delegateTarget) {
    e.preventDefault();

    const { parentNode } = delegateTarget;

    if (parentNode.lastChild !== delegateTarget) {
      add(parentNode, this.options.isOpenClass);

      this.opened.push(parentNode);
    }
  }

  handleBackClick(e) {
    e.preventDefault();

    remove(this.opened.pop(), this.options.isOpenClass);
  }
}

export default MobileNavigation;
