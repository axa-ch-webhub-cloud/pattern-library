import css from '../../../js/css';
import { add, remove } from '../../../js/class-list';
import UiEvents from '../../../js/ui-events';

class Stroke extends UiEvents {
  static DEFAULTS = {
    strokeClass: 'a-stroke',
    list: '.js-main-navigation__list',
    toggleClass: 'js-main-navigation__list-link',
    enterClass: 'is-enter',
    moveClass: 'is-move',
  };

  constructor(rootNode, options = {}) {
    super(rootNode, {
      containerClass: '.js-main-navigation__list',
      toggleClass: Stroke.DEFAULTS.toggleClass,
      closeClass: 'js-sub-navigation__index-close',
      sameClickClose: !options.simpleMenu,
      useDefaultEvent: !!options.simpleMenu,
    });

    this.rootNode = rootNode;
    this.options = {
      ...Stroke.DEFAULTS,
      ...options,
    };

    this.init();
  }

  init() {
    this.rootNode.style.position = 'relative';

    this.list = this.rootNode.querySelector(this.options.list);

    this.stroke = document.createElement('div');
    this.stroke.className = this.options.strokeClass;

    this.list.appendChild(this.stroke);
  }

  enter(node) {
    add(this.stroke, this.options.enterClass);

    const { parentNode } = node;

    css(this.stroke, {
      width: `${parentNode.offsetWidth}px`,
      left: `${parentNode.offsetLeft}px`,
    });
  }

  move(node) {
    add(this.stroke, this.options.moveClass);

    const { parentNode } = node;

    css(this.stroke, {
      width: `${parentNode.offsetWidth}px`,
      left: `${parentNode.offsetLeft}px`,
    });
  }

  leave() {
    remove(this.stroke, this.options.moveClass);
    remove(this.stroke, this.options.enterClass);
  }

  destroy() {
    super.destroy();

    if (this.stroke) {
      this.stroke.parentNode.removeChild(this.stroke);
      delete this.stroke;
    }

    delete this.rootNode;
    delete this.options;
  }
}

export default Stroke;
