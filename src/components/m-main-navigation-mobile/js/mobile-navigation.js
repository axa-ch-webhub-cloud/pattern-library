import on from '../../../js/on';
import { add, remove } from '../../../js/class-list';

class MobileNavigation {
  static DEFAULTS = {
    burger: '.js-main-navigation__burger',
    burgerState: 'is-open',
    nav: 'js-main-navigation-mobile__nav',
  }

  constructor(rootNode, options) {
    this.rootNode = rootNode;
    this.options = {
      ...MobileNavigation.DEFAULTS,
      ...options,
    };
    this.isOpen = false;

    this.handleBurgerClick = this.handleBurgerClick.bind(this);

    this.init();
  }

  init() {
    this.burger = this.rootNode.ownerDocument.querySelector(this.options.burger);

    this.on();
  }

  on() {
    this.unBurger = on(this.burger, 'click', this.handleBurgerClick);
  }

  handleBurgerClick(e) {
    e.preventDefault();

    console.log('clicked burger');

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;

    add(this.burger, this.options.burgerState);
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    remove(this.burger, this.options.burgerState);
  }
}

export default MobileNavigation;
