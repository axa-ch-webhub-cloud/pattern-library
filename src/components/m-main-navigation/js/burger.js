import Enum from '../../../js/enum';
import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import { add, remove } from '../../../js/class-list';
import { publish } from '../../../js/pubsub';

const EVENTS = Enum('click', 'resize');

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

  set contextNode(value) {
    this._contextNode = value;
  }

  on() {
    this.off();

    this.unBurgerClick = on(this.burger, EVENTS.CLICK, this.handleBurgerClick);
    this.unResize = on(ownerWindow(this.rootNode), EVENTS.RESIZE, this.handleResize);
  }

  off() {
    if (this.unBurgerClick) {
      this.unBurgerClick();
    }

    if (this.unResize) {
      this.unResize();
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

    if (this._contextNode) {
      console.log('>>>>>>>>> publish open');
      publish('main-navigation-mobile/open', null, this._contextNode);
    }
  }

  close() {
    if (!this.isOpen) {
      return;
    }

    this.isOpen = false;

    remove(this.burger, this.options.burgerState);

    if (this._contextNode) {
      console.log('<<<<<<<<< publish close');
      publish('main-navigation-mobile/close', null, this._contextNode);
    }
  }

  destroy() {
    this.off();

    delete this.burger;
  }
}

export default Burger;
