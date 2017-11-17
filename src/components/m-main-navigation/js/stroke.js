import on from '../../../js/on';
import css from '../../../js/css';
import classList from '../../../js/class-list';

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

    this.handleClick = this.handleClick.bind(this);

    this.isVisible = false;

    this.init();
  }

  init() {
    this.rootNode.style.position = 'relative';

    this.list = this.rootNode.querySelector(this.options.list);

    this.stroke = document.createElement('div');
    this.stroke.className = this.options.strokeClass;

    this.list.appendChild(this.stroke);

    console.log('init stroke');

    this.on();
  }

  on() {
    this.off();

    this.unClick = on(this.list, 'click', this.options.listLink, this.handleClick);
  }

  off() {
    if ('unClick' in this) {
      this.unClick();
      delete this.unClick;
    }
  }

  handleClick(e, delegateTarget) {
    e.preventDefault();

    const listItem = delegateTarget.parentNode;
    const isSame = listItem === this.lastOpen;

    if (!this.isVisible) {
      this.enter(delegateTarget);
    } else {
      if (isSame) {
        this.leave();
      } else {
        this.move(delegateTarget);
      }
    }
  }

  enter(dom) {
    this.lastOpen = dom;

    classList.add(this.stroke, 'is-enter');

    css(this.stroke, {
      width: `${dom.offsetWidth}px`,
      left: `${dom.offsetLeft}px`
    });

    this.isVisible = true;
  }

  move(dom) {
    this.lastOpen = dom;

    classList.add(this.stroke, 'is-move');

    css(this.stroke, {
      width: `${dom.offsetWidth}px`,
      left: `${dom.offsetLeft}px`
    });
  }

  leave() {
    if (this.lastOpen) {
      delete this.lastOpen;
    }

    classList.remove(this.stroke, 'is-move');
    classList.remove(this.stroke, 'is-enter');

    this.isVisible = false;
  }

  destroy() {
    this.off();
  }
}

export default Stroke;
