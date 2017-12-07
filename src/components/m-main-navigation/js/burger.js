import Enum from '../../../js/enum';
import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import { add, remove } from '../../../js/class-list';
import { publish } from '../../../js/pubsub';

const EVENTS = Enum('click', 'resize', 'keyup');

class Burger {
  static DEFAULTS = {
    burger: '.js-main-navigation__burger',
    burgerState: 'is-burger-open',
  }

  constructor(rootNode, options) {
    this.rootNode = rootNode;
    this.options = {
      ...Burger.DEFAULTS,
      ...options,
    };
    this.isOpen = false;

    this._handleBurgerClick = this._handleBurgerClick.bind(this);
    this._handleResize = this._handleResize.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);

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

    this._unBurgerClick = on(this.burger, EVENTS.CLICK, this._handleBurgerClick);
    this._unResize = on(ownerWindow(this.rootNode), EVENTS.RESIZE, this._handleResize);
    this._unCloseEscape = on(this.rootNode.ownerDocument, EVENTS.KEYUP, this._handleKeyUp);
  }

  off() {
    if (this._unBurgerClick) {
      this._unBurgerClick();
    }

    if (this._unResize) {
      this._unResize();
    }

    if (this._unCloseEscape) {
      this._unCloseEscape();
    }
  }

  _handleBurgerClick(e) {
    e.preventDefault();

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  _handleResize() {
    this.close();
  }

  _handleKeyUp(e) {
    const isEscape = e.key === EVENTS.ESCAPE || e.key === EVENTS.ESC || e.keyCode === 27;

    if (isEscape) {
      e.preventDefault();

      this.close();
    }
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
