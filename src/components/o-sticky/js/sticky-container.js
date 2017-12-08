import StickySpy from './sticky-spy';
import Enum from '../../../js/enum';
import { subscribe } from '../../../js/pubsub';
import { add, remove } from '../../../js/class-list';

const states = Enum('IS_IDLE', 'IS_ACTIVE');

class StickyContainer {
  static DEFAULTS = {
    isActiveClass: 'is-sticky-container-active',
    isIdleClass: 'is-sticky-container-idle',
  };

  constructor(rootNode) {
    this.roodNode = rootNode;
    this.state = states.IS_IDLE;

    this._active = this._active.bind(this);
    this._idle = this._idle.bind(this);

    this.spy = StickySpy();
    this.spy.addContainer(rootNode);

    this._on();
  }

  _on() {
    this._off();

    this._unActive = subscribe('sticky-container/active', this._active, this.roodNode);
    this._unIdle = subscribe('sticky-container/idle', this._idle, this.roodNode);
  }

  _off() {
    if (this._unActive) {
      this._unActive();
    }

    if (this._unIdle) {
      this._unIdle();
    }
  }

  _active() {
    if (this.state === states.IS_ACTIVE) {
      return;
    }
    this.state = states.IS_ACTIVE;

    add(this.roodNode, StickyContainer.DEFAULTS.isActiveClass);
    remove(this.roodNode, StickyContainer.DEFAULTS.isIdleClass);
  }

  _idle() {
    if (this.state === states.IS_IDLE) {
      return;
    }
    this.state = states.IS_IDLE;

    add(this.roodNode, StickyContainer.DEFAULTS.isIdleClass);
    remove(this.roodNode, StickyContainer.DEFAULTS.isActiveClass);
  }

  destroy() {
    this._off();

    this.spy.remove(this.roodNode);
    delete this.spy;
    delete this.roodNode;
  }
}

export default StickyContainer;
