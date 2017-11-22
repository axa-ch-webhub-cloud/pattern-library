import Enum from '../../../js/enum';
import css from '../../../js/css';
import { add, remove } from '../../../js/class-list';
import getUiObserver from '../../../js/ui-observer';

const DYNAMIC_PROPS = Enum('OBSERVER', 'OBSERVER_UN_REGISTER', 'stroke');

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

    this[DYNAMIC_PROPS.STROKE] = document.createElement('div');
    this[DYNAMIC_PROPS.STROKE].className = this.options.strokeClass;

    this.list.appendChild(this[DYNAMIC_PROPS.STROKE]);

    this[DYNAMIC_PROPS.OBSERVER] = getUiObserver(this.rootNode, {
      containerClass: '.js-main-navigation__list',
      toggleClass: 'js-main-navigation__list-link',
      closeClass: 'js-sub-navigation__index-close',
    });

    this.on();
  }

  on() {
    this[DYNAMIC_PROPS.OBSERVER_UN_REGISTER] = this[DYNAMIC_PROPS.OBSERVER].register(this);
  }

  off() {
    if (DYNAMIC_PROPS.OBSERVER_UN_REGISTER in this) {
      this[DYNAMIC_PROPS.OBSERVER_UN_REGISTER]();
    }
  }

  enter(node) {
    add(this[DYNAMIC_PROPS.STROKE], this.options.enterClass);

    const { parentNode } = node;

    css(this[DYNAMIC_PROPS.STROKE], {
      width: `${parentNode.offsetWidth}px`,
      left: `${parentNode.offsetLeft}px`,
    });
  }

  move(node) {
    add(this[DYNAMIC_PROPS.STROKE], this.options.moveClass);

    const { parentNode } = node;

    css(this[DYNAMIC_PROPS.STROKE], {
      width: `${parentNode.offsetWidth}px`,
      left: `${parentNode.offsetLeft}px`,
    });
  }

  leave() {
    remove(this[DYNAMIC_PROPS.STROKE], this.options.moveClass);
    remove(this[DYNAMIC_PROPS.STROKE], this.options.enterClass);
  }

  destroy() {
    this.off();

    if (DYNAMIC_PROPS.OBSERVER in this) {
      this[DYNAMIC_PROPS.OBSERVER].destroy();
      delete this[DYNAMIC_PROPS.OBSERVER];
    }

    if (DYNAMIC_PROPS.STROKE in this) {
      this[DYNAMIC_PROPS.STROKE].parentNode.removeChild(this[DYNAMIC_PROPS.STROKE]);
      delete this[DYNAMIC_PROPS.STROKE];
    }

    delete this.rootNode;
    delete this.options;
  }
}

export default Stroke;
