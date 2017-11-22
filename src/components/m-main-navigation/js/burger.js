import Enum from '../../../js/enum';
import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import { add, remove } from '../../../js/class-list';

const DYNAMIC_PROPS = Enum('UN_BURGER', 'click', 'UN_RESIZE', 'resize');

class Burger {
  static DEFAULTS = {
    burger: '.js-main-navigation__burger',
    burgerState: 'is-open',
  }

  constructor(rootNode, options) {
    this.rootNode = rootNode;
    this.options = {
      ...Burger.DEFAULTS,
      ...options,
    };
    this.isOpen = false;

    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.init();
  }

  init() {
    this.burger = this.rootNode.querySelector(this.options.burger);

    this.on();
  }

  on() {
    this.off();

    this[DYNAMIC_PROPS.UN_BURGER] = on(this.burger, DYNAMIC_PROPS.CLICK, this.handleBurgerClick);
    this[DYNAMIC_PROPS.UN_RESIZE] = on(ownerWindow(this.rootNode), DYNAMIC_PROPS.RESIZE, this.handleResize);
  }

  off() {
    if (DYNAMIC_PROPS.UN_BURGER in this) {
      this[DYNAMIC_PROPS.UN_BURGER]();
    }

    if (DYNAMIC_PROPS.UN_RESIZE in this) {
      this[DYNAMIC_PROPS.UN_RESIZE]();
    }
  }

  handleBurgerClick(e) {
    e.preventDefault();

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  handleResize() {
    this.close();
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

  destroy() {
    this.off();

    delete this.burger;
  }
}

export default Burger;
