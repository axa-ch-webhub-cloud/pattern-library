import on from '../../../js/on';
import closest from '../../../js/closest';
import throttle from '../../../js/throttle';
import getScrollTop from '../../../js/get-scroll-top';
import elementFromPagePoint from '../../../js/element-from-page-point';
import { getViewportWidth, getViewportHeight } from '../../../js/viewport';
import { publish } from '../../../js/pubsub';

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

class StickySpy {
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
    // the scroll position of the y-axis
    const scrollTop = getScrollTop();
    // the diference between the last scroll position
    const diffTop = scrollTop - this.lastScrollTop;
    // the scroll direction -> -1: top, 0: node, 1: bottom
    // eslint-disable-next-line no-nested-tenary
    const direction = diffTop > 0 ? 1 : diffTop < 0 ? -1 : 0;
    // width of viewport
    const viewportWidth = getViewportWidth();
    // current top most element at the center of the first pixel in viewport
    const topNode = elementFromPagePoint(viewportWidth / 2, scrollTop);
    // closest sticky node or null
    const stickyNode = closest(topNode, 'js-sticky');
    // closest sticky container node or null
    const stickyContainerNode = closest(stickyNode || topNode, 'js-sticky-container');

    // enter a sticky container
    const enterContainer = stickyContainerNode && !this.lastStickyContainer;
    // leave a sticky container
    const leaveContainer = !stickyContainerNode && this.lastStickyContainer;
    // move between containers
    const moveContainer = stickyContainerNode && this.lastStickyContainer && stickyContainerNode !== this.lastStickyContainer;

    // enter a sticky node
    const enterSticky = stickyNode && !this.lastStickyNode;
    // leave a sticky node
    const leaveSticky = !stickyNode && this.lastStickyNode;
    // move a sticky node
    const moveSticky = stickyNode && this.lastStickyNode && stickyNode !== this.lastStickyNode;

    if (enterContainer || moveContainer) {
      publish('sticky-container/enter', null, stickyContainerNode);
    }

    if (leaveContainer || moveContainer) {
      publish('sticky-container/leave', null, this.lastStickyContainer);
    }

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
    instance = new StickySpy();
  }

  return instance;
}
