import css from '../../../js/css';
import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import { requestAnimationFrame, cancelAnimationFrame } from '../../../js/request-animation-frame';
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

    this._list = this.rootNode.querySelector(this.options.list);

    this._stroke = document.createElement('div');
    this._stroke.className = this.options.strokeClass;

    this._list.appendChild(this._stroke);
  }

  enter(node) {
    const { parentNode } = node;
    this._node = node;
    this._parentNode = parentNode;

    this._handleStaticState(true, true);

    requestAnimationFrame(() => {
      add(this._stroke, this.options.enterClass);
      css(this._stroke, {
        width: `${parentNode.offsetWidth}px`,
        left: `${parentNode.offsetLeft}px`,
      });
    });
  }

  move(node) {
    const { parentNode } = node;
    this._node = node;
    this._parentNode = parentNode;

    this._handleStaticState(false);

    requestAnimationFrame(() => {
      add(this._stroke, this.options.moveClass);
      css(this._stroke, {
        width: `${parentNode.offsetWidth}px`,
        left: `${parentNode.offsetLeft}px`,
      });

      this._onMoving();
    });
  }

  leave() {
    this._offMoving();
    this._handleStaticState(true);

    requestAnimationFrame(() => {
      remove(this._stroke, this.options.moveClass);
      remove(this._stroke, this.options.enterClass);
    });

    this._parentNode = null;
    this._node = null;
  }

  _onMoving() {
    this._offMoving();

    this._unResize = on(ownerWindow(this.rootNode), 'resize', this._handleResize);
    this._unTransitionEnd = on(this._stroke, 'transitionend', this._handleTransitionEnd);
  }

  _offMoving() {
    if (this._unResize) {
      this._unResize();
    }

    if (this._unTransitionEnd) {
      this._unTransitionEnd();
    }
  }

  _handleStaticState(isStatic, force) {
    if (!force && isStatic === this._isStatic) {
      return;
    }

    this._isStatic = isStatic;

    if (isStatic) {
      this._node.appendChild(this._stroke);
      add(this._stroke, this.options.staticClass);
    } else {
      this._list.appendChild(this._stroke);
      remove(this._stroke, this.options.staticClass);
    }
  }

  _handleResize() {
    if (this.resizeTimeout) {
      cancelAnimationFrame(this.resizeTimeout);
      this.resizeTimeout = null;
    }

    this.resizeTimeout = requestAnimationFrame(() => {
      const { _parentNode: { offsetWidth, offsetLeft } } = this;

      if (offsetWidth && offsetLeft) {
        css(this._stroke, {
          width: `${offsetWidth}px`,
          left: `${offsetLeft}px`,
        });
      }
    });
  }

  _handleTransitionEnd(e) {
    if (e.propertyName === 'left') {
      this._offMoving();
      this._handleStaticState(true);
    }
  }

  destroy() {
    super.destroy();

    if (this._stroke) {
      this._stroke.parentNode.removeChild(this._stroke);
      delete this._stroke;
    }

    delete this.rootNode;
    delete this.options;
  }
}

export default Stroke;
