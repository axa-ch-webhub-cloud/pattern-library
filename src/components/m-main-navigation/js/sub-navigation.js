import Enum from '../../../js/enum';
import { add, remove } from '../../../js/class-list';
import getUiObserver from '../../../js/ui-observer';

const DYNAMIC_PROPS = Enum('OBSERVER', 'OBSERVER_UN_REGISTER');

class SubNavigation {
  static DEFAULTS = {
    list: '.js-main-navigation__list',
    stateClass: 'is-open',
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...SubNavigation.DEFAULTS,
      ...options,
    };

    this.init();
  }

  init() {
    this.list = this.rootNode.querySelector(this.options.list);

    this[DYNAMIC_PROPS.OBSERVER] = getUiObserver(this.rootNode, {
      containerClass: '.js-main-navigation__list',
      toggleClass: 'js-main-navigation__list-link',
      closeClass: 'js-sub-navigation__index-close',
    });

    this.on();
  }

  on() {
    this[DYNAMIC_PROPS.OBSERVER_UN_REGISTER] = this[DYNAMIC_PROPS.OBSERVER].register(this);
  }

  off() {
    if (DYNAMIC_PROPS.OBSERVER_UN_REGISTER in this) {
      this[DYNAMIC_PROPS.OBSERVER_UN_REGISTER]();
    }
  }

  enter(node) {
    add(node.parentNode, this.options.stateClass);
  }

  move(node, lastNode) {
    remove(lastNode.parentNode, this.options.stateClass);
    add(node.parentNode, this.options.stateClass);
  }

  leave(node) {
    remove(node.parentNode, this.options.stateClass);
  }

  destroy() {
    this.off();

    if (DYNAMIC_PROPS.OBSERVER in this) {
      this[DYNAMIC_PROPS.OBSERVER].destroy();
      delete this[DYNAMIC_PROPS.OBSERVER];
    }

    delete this.rootNode;
    delete this.options;
  }
}

export default SubNavigation;
