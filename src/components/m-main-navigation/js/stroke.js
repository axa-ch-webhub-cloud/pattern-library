import css from '../../../js/css';
import { add, remove } from '../../../js/class-list';
import UiObserver from '../../../js/ui-observer';

class Stroke {
  static DEFAULTS = {
    strokeClass: 'a-stroke',
    list: '.js-main-navigation__list',
    enterClass: 'is-enter',
    moveClass: 'is-move',
  };

  constructor(rootNode, options = {}) {
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

    this.observer = new UiObserver(this.rootNode, {
      containerClass: '.js-main-navigation__list',
      toggleClass: 'js-main-navigation__list-link',
      closeClass: 'js-sub-navigation__index-close',
    });

    this.on();
  }

  on() {
    this.unObserve = this.observer.subscribe(this);
  }

  off() {
    if (this.unObserve) {
      this.unObserve();
    }
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
    this.off();

    if (this.observer) {
      this.observer.destroy();
      delete this.observer;
    }

    if (this.stroke) {
      this.stroke.parentNode.removeChild(this.stroke);
      delete this.stroke;
    }

    delete this.rootNode;
    delete this.options;
  }
}

export default Stroke;
