import on from '../../../js/on';
import { add, remove } from '../../../js/class-list';

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
  }

  off() {
    if (this.unCategoryClick) {
      this.unCategoryClick();
    }

    if (this.unBackClick) {
      this.unBackClick();
    }
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

  handleLinkClick(e) {
    e.preventDefault();
  }
}

export default MobileNavigation;
