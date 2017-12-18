import { add, remove } from '../../../js/class-list';
import UiEvents from '../../../js/ui-events';

class HeaderSubNavigation extends UiEvents {
  static DEFAULTS = {
    list: '.js-header-main-navigation__list',
    toggleClass: 'js-header-main-navigation__list-link',
    stateClass: 'is-open',
  };

  constructor(rootNode, options = {}) {
    super(rootNode, {
      containerClass: '.js-header-main-navigation__list',
      toggleClass: HeaderSubNavigation.DEFAULTS.toggleClass,
      closeClass: 'js-header-sub-navigation__index-close',
      useDefaultEvent: !!options.simpleMenu,
      outerClose: !options.simpleMenu,
      escapeClose: !options.simpleMenu,
    });

    this.rootNode = rootNode;
    this.options = {
      ...HeaderSubNavigation.DEFAULTS,
      ...options,
    };

    this.init();
  }

  init() {
    this.list = this.rootNode.querySelector(this.options.list);
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
    super.destroy();

    delete this.rootNode;
    delete this.options;
  }
}

export default HeaderSubNavigation;
