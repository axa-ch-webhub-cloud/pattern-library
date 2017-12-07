import on from '../../../js/on';
import closest from '../../../js/closest';
import throttle from '../../../js/throttle';
import getScrollTop from '../../../js/get-scroll-top';
import elementFromPagePoint from '../../../js/element-from-page-point';

let instance;
const events = [
  'resize',
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
].join(' ');

class EventManager {
  constructor() {
    this.lastScrollTop = 0;

    this._change = throttle(this._change.bind(this), 100);

    this._on();
  }

  _on() {
    this._off();

    this._unChange = on(window, events, this._change);
  }

  _off() {
    if (this._unChange) {
      this._unChange();
    }
  }

  _change(event) {
    const scrollTop = getScrollTop();
    const diffTop = scrollTop - this.lastScrollTop;
    const direction = diffTop > 0 ? 1 : diffTop < 0 ? -1 : 0;
    const topNode = closest(elementFromPagePoint(0, scrollTop), 'js-sticky');
    const stickyNode = closest(topNode, 'js-sticky');
    const stickyContainerNode = closest(stickyNode, 'js-sticky-container');

    console.log(`sticky -> ${event.type}`);
    console.log(`top: ${scrollTop}; diff: ${diffTop}, direction: ${direction}`);

    console.log(stickyNode, stickyContainerNode);

    this.lastScrollTop = scrollTop;
    this.lastStickyNode = stickyNode;
    this.lastStickyContainer = stickyContainerNode;
  }
}

export default function factory() {
  if (!instance) {
    instance = new EventManager();
  }

  return instance;
}
