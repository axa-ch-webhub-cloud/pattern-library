import on from '../../../js/on';
import closest from '../../../js/closest';
import getScrollTop from '../../../js/get-scroll-top';
import elementFromPagePoint from '../../../js/element-from-page-point';
import { getViewportWidth, getViewportHeight } from '../../../js/viewport';
import { publish } from '../../../js/pubsub';
import { requestAnimationFrame } from '../../../js/request-animation-frame';

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
    this.framePending = false;
    this.lastScrollTop = 0;
    this.containerNodes = [];

    this._change = this._change.bind(this);

    this._on();
  }

  addContainer(node) {
    this.containerNodes.push(node);
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
    if (this.framePending) {
      return;
    }

    requestAnimationFrame(() => {
      // the scroll position of the y-axis
      const scrollTop = getScrollTop();
      // the diference between the last scroll position
      const diffTop = scrollTop - this.lastScrollTop;
      // the scroll direction -> -1: top, 0: node, 1: bottom
      // eslint-disable-next-line no-nested-tenary
      const direction = diffTop > 0 ? 1 : diffTop < 0 ? -1 : 0;
      // width of viewport
      const viewportWidth = getViewportWidth();
      // all spied container nodes
      const { containerNodes } = this;

      for (let i = 0, { length } = containerNodes; i < length; i++) {
        const container = containerNodes[i];
        const { top, bottom } = container.getBoundingClientRect();
        const isActiveContainer = top <= 0 && bottom >= 0;
        const eventType = isActiveContainer ? 'active' : 'idle';

        publish(`sticky-container/${eventType}`, { containerTop: top, containerBottom: bottom, direction }, container);
      }

      this.lastScrollTop = scrollTop;

      this.framePending = false;
    });
  }
}

export default function factory() {
  if (!instance) {
    instance = new StickySpy();
  }

  return instance;
}
