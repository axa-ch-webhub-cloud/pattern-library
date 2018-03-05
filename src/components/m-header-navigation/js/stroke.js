import css from '../../../js/css';
import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import { requestAnimationFrame, cancelAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove, has } from '../../../js/class-list';
import UiEvents from '../../../js/ui-events';

class Stroke extends UiEvents {
  static DEFAULTS = {
    strokeClass: 'a-stroke',
    list: '.js-header-navigation__list',
    toggleClass: 'js-header-navigation__list-link',
    enterClass: 'is-stroke-enter',
    moveClass: 'is-stroke-move',
    staticClass: 'is-stroke-static',
    interactiveClass: 'is-stroke-interactive',
    activeClass: 'is-header-navigation-active',
    activeOpenClass: 'is-stroke-active-open',
    activeMoveClass: 'is-stroke-active-move',
    transitionOffClass: 'is-stroke-transition-off',
  };

  constructor(wcNode, options = {}) {
    super(wcNode, {
      containerClass: '.js-header-navigation__list',
      toggleClass: Stroke.DEFAULTS.toggleClass,
      closeClass: 'js-header-navigation-close',
      sameClickClose: !options.simpleMenu,
      useDefaultEvent: !!options.simpleMenu,
      outerClose: !options.simpleMenu,
      escapeClose: !options.simpleMenu,
    });

    this.wcNode = wcNode;
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
    this.wcNode.style.position = 'relative';

    this._list = this.wcNode.querySelector(this.options.list);

    this._stroke = document.createElement('div');
    this._stroke.className = this.options.strokeClass;

    this._list.appendChild(this._stroke);
  }

  enter(node) {
    const { parentNode } = node;
    this._node = node;
    this._parentNode = parentNode;

    if (has(node, this.options.activeClass)) {
      this._activeNode = node;

      add(node, this.options.activeOpenClass);
      add(node, this.options.activeMoveClass);
    }

    requestAnimationFrame(() => {
      this._handleStaticState(true, true);
      add(this._list, this.options.interactiveClass);

      requestAnimationFrame(() => {
        add(this._stroke, this.options.enterClass);
        css(this._stroke, {
          width: `${parentNode.offsetWidth}px`,
          left: `${parentNode.offsetLeft}px`,
        });
      });
    });
  }

  move(node) {
    const { parentNode } = node;
    this._node = node;
    this._parentNode = parentNode;

    if (this._activeNode) {
      remove(this._activeNode, this.options.activeMoveClass);
    }

    requestAnimationFrame(() => {
      this._handleStaticState(false);

      requestAnimationFrame(() => {
        add(this._stroke, this.options.moveClass);
        css(this._stroke, {
          width: `${parentNode.offsetWidth}px`,
          left: `${parentNode.offsetLeft}px`,
        });

        this._onMoving();
      });
    });
  }

  leave() {
    const { _node } = this;

    this._offMoving();

    if (this._activeNode) {
      remove(this._activeNode, this.options.activeMoveClass);
      remove(this._activeNode, this.options.activeOpenClass);
      this._activeNode = null;
    }

    if (has(_node, this.options.activeClass)) {
      add(_node, this.options.activeOpenClass);
    }

    requestAnimationFrame(() => {
      this._handleStaticState(true);
      remove(this._list, this.options.interactiveClass);

      requestAnimationFrame(() => {
        remove(this._stroke, this.options.moveClass);
        remove(this._stroke, this.options.enterClass);
        remove(_node, this.options.activeOpenClass);
      });

      this._parentNode = null;
      this._node = null;
    });
  }

  _onMoving() {
    this._offMoving();

    this._unResize = on(ownerWindow(this.wcNode), 'resize', this._handleResize);
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

    // Edge animation broken
    // see https://github.com/axa-ch/patterns-library/issues/304
    add(this._stroke, this.options.transitionOffClass);

    if (isStatic) {
      this._node.appendChild(this._stroke);
      add(this._stroke, this.options.staticClass);
    } else {
      this._list.appendChild(this._stroke);
      remove(this._stroke, this.options.staticClass);
    }

    // Edge animation broken
    // see https://github.com/axa-ch/patterns-library/issues/304
    requestAnimationFrame(() => {
      remove(this._stroke, this.options.transitionOffClass);
    });
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

    delete this.wcNode;
    delete this.options;
  }
}

export default Stroke;
