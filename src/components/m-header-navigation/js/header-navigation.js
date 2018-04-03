import { add, remove } from 'js/class-list';
import { requestAnimationFrame } from 'js/request-animation-frame';
import forceRepaint from 'js/force-repaint';
import UiEvents from 'js/ui-events';

class HeaderNavigation extends UiEvents {
  static DEFAULTS = {
    list: '.js-header-navigation__list',
    toggleClass: 'js-header-navigation__list-link',
    subNavi: '.js-header-sub-navigation',
    openClass: 'is-header-sub-navigation-open',
  };

  constructor(wcNode, options = {}) {
    super(wcNode, {
      containerClass: '.js-header-navigation__list',
      toggleClass: HeaderNavigation.DEFAULTS.toggleClass,
      closeClass: 'js-header-navigation-close',
      preventDefault: options.preventDefault || !options.simpleMenu,
      outerClose: !options.simpleMenu,
      escapeClose: !options.simpleMenu,
    });

    this.wcNode = wcNode;
    this.options = {
      ...HeaderNavigation.DEFAULTS,
      useDefaultEvent: !!options.useDefaultEvent || !!options.simpleMenu,
      ...options,
    };

    this.init();
  }

  init() {
    this.list = this.wcNode.querySelector(this.options.list);
  }

  enter(node) {
    const { parentNode } = node;

    add(parentNode, this.options.openClass);

    // @todo: can we fix this Edge problem better?
    requestAnimationFrame(() => {
      // Edge 16 won't repaint -> force it
      // see https://github.com/axa-ch/patterns-library/issues/304
      forceRepaint(parentNode.querySelector(this.options.subNavi));

      requestAnimationFrame(() => {
        // Edge 16 won't repaint -> force it again!
        // see https://github.com/axa-ch/patterns-library/issues/367
        forceRepaint(parentNode.querySelector(this.options.subNavi));
      });
    });
  }

  move(node, lastNode) {
    const { parentNode } = node;

    remove(lastNode.parentNode, this.options.openClass);
    add(parentNode, this.options.openClass);

    // Edge 16 won't repaint -> force it
    // see https://github.com/axa-ch/patterns-library/issues/304
    forceRepaint(parentNode.querySelector(this.options.subNavi));
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

export default HeaderNavigation;
