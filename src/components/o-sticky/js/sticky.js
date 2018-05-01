import StickySpy from './sticky-spy';
import Enum from '../../../js/enum';
import { subscribe } from '../../../js/pubsub';
import { add, remove } from '../../../js/class-list';
import css from '../../../js/css';

const states = Enum('IS_IN_FLOW', 'IS_STICKY', 'IS_BOTTOM');

class Sticky {
  static DEFAULTS = {
    placeholderClass: '.js-sticky__placeholder',
    boxClass: '.js-sticky__box',
    isStickyClass: 'is-sticky-sticky',
    isBottomClass: 'is-sticky-bottom',
    isScrollUp: 'is-sticky-scroll-up',
    isScrollDown: 'is-sticky-scroll-down',
  };

  constructor(wcNode) {
    this.wcNode = wcNode;
    this.state = states.IS_IN_FLOW;
    this.lastDirection = 0;

    this.placeholder = wcNode.querySelector(Sticky.DEFAULTS.placeholderClass);
    this.box = wcNode.querySelector(Sticky.DEFAULTS.boxClass);

    this.spy = StickySpy();
  }

  set contextNode(value) {
    this._contextNode = value;

    this._on();
  }

  _on() {
    this._off();

    this._unActive = subscribe('sticky-container/active', this._update, this._contextNode);
    this._unIdle = subscribe('sticky-container/idle', this._update, this._contextNode);
  }

  _off() {
    if (this._unActive) {
      this._unActive();
    }

    if (this._unIdle) {
      this._unIdle();
    }
  }

  _update = ({ detail }) => {
    const { containerBottom, direction, forceRepaint } = detail;
    const { wcNode, state, lastDirection } = this;
    const hasDirectionChanged = direction !== lastDirection;
    const { offsetHeight, offsetWidth } = wcNode;
    const { left, top } = wcNode.getBoundingClientRect();
    const isInFlow = top > 0;
    const isSticky = top <= 0 && containerBottom >= offsetHeight;
    const isBottom = top <= 0 && containerBottom < offsetHeight;

    if (hasDirectionChanged && direction === 1) {
      add(wcNode, Sticky.DEFAULTS.isScrollDown);
      remove(wcNode, Sticky.DEFAULTS.isScrollUp);
    } else if (hasDirectionChanged && direction === -1) {
      add(wcNode, Sticky.DEFAULTS.isScrollUp);
      remove(wcNode, Sticky.DEFAULTS.isScrollDown);
    }

    if (isSticky && (forceRepaint || state !== states.IS_STICKY)) {
      this.state = states.IS_STICKY;

      add(wcNode, Sticky.DEFAULTS.isStickyClass);
      remove(wcNode, Sticky.DEFAULTS.isBottomClass);
      css(this.placeholder, { height: `${offsetHeight}px` });
      css(this.box, { left: `${left}px`, width: `${offsetWidth}px` });
    }

    if (isBottom && (forceRepaint || state !== states.IS_BOTTOM)) {
      this.state = states.IS_BOTTOM;

      remove(wcNode, Sticky.DEFAULTS.isStickyClass);
      add(wcNode, Sticky.DEFAULTS.isBottomClass);
      css(this.placeholder, { height: `${offsetHeight}px` });
      css(this.box, { left: `${left}px`, width: `${offsetWidth}px` });
    }

    if (isInFlow && (forceRepaint || state !== states.IS_IN_FLOW)) {
      this.state = states.IS_IN_FLOW;

      remove(wcNode, Sticky.DEFAULTS.isStickyClass);
      remove(wcNode, Sticky.DEFAULTS.isBottomClass);

      css(this.placeholder, { height: '' });
      css(this.box, { left: '', width: '' });
    }
  }

  destroy() {
    this._off();

    this.spy.remove();
    delete this.spy;
    delete this.roodNode;
    delete this.placeholder;
    delete this.box;
    delete this._contextNode;
  }
}

export default Sticky;
