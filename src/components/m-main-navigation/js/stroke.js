import css from '../../../js/css';
import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
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
      outerClose: !options.simpleMenu,
      escapeClose: !options.simpleMenu,
    });

    this.rootNode = rootNode;
    this.options = {
      ...Stroke.DEFAULTS,
      ...options,
    };

    this._handleResize = this._handleResize.bind(this);

    this.init();
  }

  init() {
    this.rootNode.style.position = 'relative';

    this.list = this.rootNode.querySelector(this.options.list);

    this.stroke = document.createElement('div');
    this.stroke.className = this.options.strokeClass;

    this.list.appendChild(this.stroke);
  }

  onInteractive() {
    this.offInteractive();

    this.unResize = on(ownerWindow(this.rootNode), 'resize', this._handleResize);
  }

  offInteractive() {
    if (this.unResize) {
      this.unResize();
    }
  }

  enter(node) {
    add(this.stroke, this.options.enterClass);

    const { parentNode } = node;
    this.parentNode = parentNode;

    css(this.stroke, {
      width: `${parentNode.offsetWidth}px`,
      left: `${parentNode.offsetLeft}px`,
    });

    this.onInteractive();
  }

  move(node) {
    add(this.stroke, this.options.moveClass);

    const { parentNode } = node;
    this.parentNode = parentNode;

    css(this.stroke, {
      width: `${parentNode.offsetWidth}px`,
      left: `${parentNode.offsetLeft}px`,
    });
  }

  leave() {
    remove(this.stroke, this.options.moveClass);
    remove(this.stroke, this.options.enterClass);

    this.offInteractive();

    this.parentNode = null;
  }

  _handleResize() {
    const { parentNode: { offsetWidth, offsetLeft } } = this;

    if (offsetWidth && offsetLeft) {
      css(this.stroke, {
        width: `${offsetWidth}px`,
        left: `${offsetLeft}px`,
      });
    }
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
