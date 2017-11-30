import css from '../../../js/css';
import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove } from '../../../js/class-list';
import UiEvents from '../../../js/ui-events';

class Stroke extends UiEvents {
  static DEFAULTS = {
    strokeClass: 'a-stroke',
    list: '.js-main-navigation__list',
    toggleClass: 'js-main-navigation__list-link',
    enterClass: 'is-enter',
    moveClass: 'is-move',
    staticClass: 'is-static',
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

    this._isStatic = false;

    this._handleResize = this._handleResize.bind(this);
    this._handleTransitionEnd = this._handleTransitionEnd.bind(this);

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

    this._unResize = on(ownerWindow(this.rootNode), 'resize', this._handleResize);
    this._unTransitionEnd = on(this.stroke, 'transitionend', this._handleTransitionEnd);
  }

  offInteractive() {
    if (this._unResize) {
      this._unResize();
    }

    if (this._unTransitionEnd) {
      this._unTransitionEnd();
    }
  }

  _handleStaticState(isStatic) {
    if (isStatic === this._isStatic) {
      return;
    }

    this._isStatic = isStatic;

    if (isStatic) {
      this.node.appendChild(this.stroke);
      add(this.stroke, this.options.staticClass);
    } else {
      this.list.appendChild(this.stroke);
      remove(this.stroke, this.options.staticClass);
    }
  }

  enter(node) {
    const { parentNode } = node;
    this.node = node;
    this.parentNode = parentNode;

    this._handleStaticState(true);

    requestAnimationFrame(() => {
      add(this.stroke, this.options.enterClass);
      css(this.stroke, {
        width: `${parentNode.offsetWidth}px`,
        left: `${parentNode.offsetLeft}px`,
      });
    });
  }

  move(node) {
    const { parentNode } = node;
    this.node = node;
    this.parentNode = parentNode;

    this._handleStaticState(false);

    requestAnimationFrame(() => {
      add(this.stroke, this.options.moveClass);
      css(this.stroke, {
        width: `${parentNode.offsetWidth}px`,
        left: `${parentNode.offsetLeft}px`,
      });

      this.onInteractive();
    });
  }

  leave() {
    this.offInteractive();
    this._handleStaticState(true);

    requestAnimationFrame(() => {
      remove(this.stroke, this.options.moveClass);
      remove(this.stroke, this.options.enterClass);
    });

    this.parentNode = null;
    this.node = null;
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

  _handleTransitionEnd(e) {
    if (e.propertyName === 'left') {
      this.offInteractive();
      this._handleStaticState(true);
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
