import { add, remove } from '../../../js/class-list';
import UiEvents from '../../../js/ui-events';

class HeaderSubNavigation extends UiEvents {
  static DEFAULTS = {
    list: '.js-header-navigation__list',
    toggleClass: 'js-header-navigation__list-link',
    openClass: 'is-header-sub-navigation-open',
    useDefaultEvent: true,
  };

  constructor(wcNode, options = {}) {
    super(wcNode, {
      containerClass: '.js-header-navigation__list',
      toggleClass: HeaderSubNavigation.DEFAULTS.toggleClass,
      closeClass: 'js-header-navigation-close',
      useDefaultEvent: true,
      outerClose: !options.simpleMenu,
      escapeClose: !options.simpleMenu,
    });

    this.wcNode = wcNode;
    this.options = {
      ...HeaderSubNavigation.DEFAULTS,
      ...options,
    };

    this.init();
  }

  init() {
    this.list = this.wcNode.querySelector(this.options.list);
  }

  enter(node) {
    add(node.parentNode, this.options.openClass);
  }

  move(node, lastNode) {
    remove(lastNode.parentNode, this.options.openClass);
    add(node.parentNode, this.options.openClass);
  }

  leave(node) {
    remove(node.parentNode, this.options.openClass);
  }

  destroy() {
    super.destroy();

    delete this.wcNode;
    delete this.options;
  }
}

export default HeaderSubNavigation;
