import { add, remove } from '../../../js/class-list';
import forceRepaint from '../../../js/force-repaint';
import UiEvents from '../../../js/ui-events';

class HeaderSubNavigation extends UiEvents {
  static DEFAULTS = {
    list: '.js-header-navigation__list',
    toggleClass: 'js-header-navigation__list-link',
    subNavi: '.js-header-sub-navigation',
    openClass: 'is-header-sub-navigation-open',
  };

  constructor(wcNode, options = {}) {
    super(wcNode, {
      containerClass: '.js-header-navigation__list',
      toggleClass: HeaderSubNavigation.DEFAULTS.toggleClass,
      closeClass: 'js-header-navigation-close',
      useDefaultEvent: 'simpleMenu' in options ? !!options.simpleMenu : true,
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
    this.subMenu = this.wcNode.querySelector(this.options.subNavi);
  }

  enter(node) {
    add(node.parentNode, this.options.openClass);

    // Edge 16 won't repaint -> force it
    // see https://github.com/axa-ch/patterns-library/issues/304
    forceRepaint(this.subMenu);
  }

  move(node, lastNode) {
    remove(lastNode.parentNode, this.options.openClass);
    add(node.parentNode, this.options.openClass);

    // Edge 16 won't repaint -> force it
    // see https://github.com/axa-ch/patterns-library/issues/304
    forceRepaint(this.subMenu);
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
