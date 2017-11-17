import css from '../../../js/css';
import classList from '../../../js/class-list';
import getMenuObserver from './menu-observer';

class Stroke {
  static DEFAULTS = {
    strokeClass: 'a-stroke',
    list: '.m-main-navigation__list',
    listItem: 'm-main-navigation__list-item',
    listLink: 'm-main-navigation__list-link',
    subNavigation: 'm-sub-navigation',
    closeButton: 'm-sub-navigation__index-close',
    stateClass: 'is-open'
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

    this.observer = getMenuObserver(this.rootNode);

    this.on();
  }

  on() {
    this.observer.register(this);
  }

  off() {
    this.observer.deregister(this);
  }

  enter(dom) {
    classList.add(this.stroke, 'is-enter');

    css(this.stroke, {
      width: `${dom.offsetWidth}px`,
      left: `${dom.offsetLeft}px`
    });

    this.isVisible = true;
  }

  move(newDom) {
    classList.add(this.stroke, 'is-move');

    css(this.stroke, {
      width: `${newDom.offsetWidth}px`,
      left: `${newDom.offsetLeft}px`
    });
  }

  leave() {
    classList.remove(this.stroke, 'is-move');
    classList.remove(this.stroke, 'is-enter');

    this.isVisible = false;
  }

  destroy() {
    this.off();

    if ('observer' in this) {
      this.observer.destroy();
      delete this.observer;
    }
  }
}

export default Stroke;
