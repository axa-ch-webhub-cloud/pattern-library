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
  };

  constructor(rootNode) {
    this.rootNode = rootNode;
    this.state = states.IS_IN_FLOW;

    this._update = this._update.bind(this);

    this.placeholder = rootNode.querySelector(Sticky.DEFAULTS.placeholderClass);
    this.box = rootNode.querySelector(Sticky.DEFAULTS.boxClass);

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

  _update({ detail }) {
    const { containerTop, containerBottom, direction, forceRepaint } = detail;
    const { rootNode } = this;
    const { offsetHeight, offsetWidth } = rootNode;
    const { left, top } = rootNode.getBoundingClientRect();
    const isInFlow = top > 0;
    const isSticky = top <= 0 && containerBottom >= offsetHeight;
    const isBottom = top <= 0 && containerBottom < offsetHeight;


    if (isSticky && (forceRepaint || this.state !== states.IS_STICKY)) {
      this.state = states.IS_STICKY;

      add(rootNode, Sticky.DEFAULTS.isStickyClass);
      remove(rootNode, Sticky.DEFAULTS.isBottomClass);
      css(this.placeholder, { height: `${offsetHeight}px` });
      css(this.box, { left: `${left}px`, width: `${offsetWidth}px` });
    }

    if (isBottom && (forceRepaint || this.state !== states.IS_BOTTOM)) {
      this.state = states.IS_BOTTOM;

      remove(rootNode, Sticky.DEFAULTS.isStickyClass);
      add(rootNode, Sticky.DEFAULTS.isBottomClass);
      css(this.placeholder, { height: `${offsetHeight}px` });
      css(this.box, { left: `${left}px`, width: `${offsetWidth}px` });
    }

    if (isInFlow && (forceRepaint || this.state !== states.IS_IN_FLOW)) {
      this.state = states.IS_IN_FLOW;

      remove(rootNode, Sticky.DEFAULTS.isStickyClass);
      remove(rootNode, Sticky.DEFAULTS.isBottomClass);

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
