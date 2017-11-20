import Enum from '../../../js/enum';
import classList from '../../../js/class-list';
import getMenuObserver from './menu-observer';

const DYNAMIC_PROPS = Enum('OBSERVER');

class SubNavigation {
  static DEFAULTS = {
    list: '.m-main-navigation__list',
    listItem: 'm-main-navigation__list-item',
    listLink: 'm-main-navigation__list-link',
    subNavigation: 'm-sub-navigation',
    closeButton: 'm-sub-navigation__index-close',
    stateClass: 'is-open'
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...SubNavigation.DEFAULTS,
      ...options
    };

    this.init();
  }

  init() {
    this.list = this.rootNode.querySelector(this.options.list);

    this[DYNAMIC_PROPS.OBSERVER] = getMenuObserver(this.rootNode);

    this.on();
  }

  on() {
    this[DYNAMIC_PROPS.OBSERVER].register(this);
  }

  off() {
    this[DYNAMIC_PROPS.OBSERVER].deregister(this);
  }

  enter(dom) {
    classList.add(dom, this.options.stateClass);
  }

  move(newDom, lastDom) {
    classList.remove(lastDom, this.options.stateClass);
    classList.add(newDom, this.options.stateClass);
  }

  leave(dom) {
    classList.remove(dom, this.options.stateClass);
  }

  destroy() {
    this.off();

    if (DYNAMIC_PROPS.OBSERVER in this) {
      this[DYNAMIC_PROPS.OBSERVER].destroy();
      delete this[DYNAMIC_PROPS.OBSERVER];
    }
  }
}

export default SubNavigation;
