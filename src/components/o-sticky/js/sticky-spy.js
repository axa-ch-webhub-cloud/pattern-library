import on from '../../../js/on';
import getScrollTop from '../../../js/get-scroll-top';
import remove from '../../../js/array-remove';
import { publish } from '../../../js/pubsub';
import { requestAnimationFrame } from '../../../js/request-animation-frame';

let instance;
let instanceCount = 0;
const criticalEvents = [
  'resize',
  'orientationchange',
].join(' ');
const events = [
  criticalEvents,
  'scroll',
  'touchstart',
  'touchmove',
  'touchend',
  'pageshow',
  'load',
].join(' ');

class StickySpy {
  constructor() {
    this.forceRepaint = false;
    this.framePending = false;
    this.lastScrollTop = 0;
    this.containerNodes = [];

    this._change = this._change.bind(this);

    this._on();
  }

  addContainer(node) {
    this.containerNodes.push(node);

    this._change();
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

  _change({ type } = {}) {
    if (criticalEvents.indexOf(type) >= 0) {
      this.forceRepaint = true;
    }

    if (this.framePending) {
      return;
    }

    requestAnimationFrame(() => {
      // the scroll position of the y-axis
      const scrollTop = getScrollTop();
      // the diference between the last scroll position
      const diffTop = scrollTop - this.lastScrollTop;
      // the scroll direction -> -1: top, 0: node, 1: bottom
      // eslint-disable-next-line no-nested-ternary
      const direction = diffTop > 0 ? 1 : diffTop < 0 ? -1 : 0;
      // all spied container nodes
      const { containerNodes, forceRepaint } = this;

      for (let i = 0, { length } = containerNodes; i < length; i++) {
        const container = containerNodes[i];
        const { top, bottom } = container.getBoundingClientRect();
        const isActiveContainer = top <= 0 && bottom >= 0;
        const eventType = isActiveContainer ? 'active' : 'idle';

        publish(`sticky-container/${eventType}`, {
          containerTop: top,
          containerBottom: bottom,
          direction,
          forceRepaint,
        }, container);
      }

      this.lastScrollTop = scrollTop;

      this.framePending = false;
      this.forceRepaint = false;
    });
  }

  remove(container) {
    if (container) {
      remove(this.containerNodes, container);
    }

    // eslint-disable-next-line no-plusplus
    instanceCount--;

    if (instanceCount <= 0 && instance) {
      this._off();

      delete this.containerNodes;
      instance = null;
    }
  }
}

export default function factory() {
  if (!instance) {
    instance = new StickySpy();
  }

  // eslint-disable-next-line no-plusplus
  instanceCount++;

  return instance;
}
