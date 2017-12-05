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

    this.unCategoryClick = on(this.nav, 'click', this.options.category, this.handleCategoryClick);
    this.unBackClick = on(this.nav, 'click', this.options.back, this.handleBackClick);
    this.unSubscribeOpen = subscribe('main-navigation-mobile/open', this.open);
    this.unSubscribeClose = subscribe('main-navigation-mobile/close', this.close);
  }

  off() {
    if (this.unCategoryClick) {
      this.unCategoryClick();
    }

    if (this.unBackClick) {
      this.unBackClick();
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
  }

  close() {
    console.log('close mobile menu');
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
