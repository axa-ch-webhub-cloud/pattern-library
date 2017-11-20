import Enum from '../../../js/enum';
import css from '../../../js/css';
import classList from '../../../js/class-list';
import getMenuObserver from './menu-observer';

const DYNAMIC_PROPS = Enum('OBSERVER');

class Stroke {
  static DEFAULTS = {
    strokeClass: 'a-stroke',
    list: '.m-main-navigation__list',
    listItem: 'm-main-navigation__list-item',
    listLink: 'm-main-navigation__list-link',
    subNavigation: 'm-sub-navigation',
    closeButton: 'm-sub-navigation__index-close',
    enterClass: 'is-enter',
    moveClass: 'is-move'
  };

  constructor(rootNode, options = {}) {
    this.rootNode = rootNode;
    this.options = {
      ...Stroke.DEFAULTS,
      ...options
    };

    this.init();
  }

  init() {
    this.rootNode.style.position = 'relative';

    this.list = this.rootNode.querySelector(this.options.list);

    this.stroke = document.createElement('div');
    this.stroke.className = this.options.strokeClass;

    this.list.appendChild(this.stroke);

    this[DYNAMIC_PROPS.OBSERVER] = getMenuObserver(this.rootNode);

    this.on();
  }

  on() {
    this[DYNAMIC_PROPS.OBSERVER].register(this);
  }

  off() {
    this[DYNAMIC_PROPS.OBSERVER].deregister(this);
  }

  enter(dom) {
    classList.add(this.stroke, this.options.enterClass);

    css(this.stroke, {
      width: `${dom.offsetWidth}px`,
      left: `${dom.offsetLeft}px`
    });
  }

  move(newDom) {
    classList.add(this.stroke, this.options.moveClass);

    css(this.stroke, {
      width: `${newDom.offsetWidth}px`,
      left: `${newDom.offsetLeft}px`
    });
  }

  leave() {
    classList.remove(this.stroke, this.options.moveClass);
    classList.remove(this.stroke, this.options.enterClass);
  }

  destroy() {
    this.off();

    if (DYNAMIC_PROPS.OBSERVER in this) {
      this[DYNAMIC_PROPS.OBSERVER].destroy();
      delete this[DYNAMIC_PROPS.OBSERVER];
    }
  }
}

export default Stroke;
