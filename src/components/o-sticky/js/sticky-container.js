import EventManager from './event-manager';
import Enum from '../../../js/enum';
import { subscribe } from '../../../js/pubsub';
import { add, remove } from '../../../js/class-list';

const states = Enum('IS_IDLE', 'IS_ACTIVE');

class StickyContainer {
  constructor(rootNode) {
    this.roodNode = rootNode;
    this.state = states.IS_IDLE;

    this._enter = this._enter.bind(this);
    this._leave = this._leave.bind(this);

    this.eventManagerInstance = EventManager();

    this._on();
  }

  _on() {
    this._off();

    this._unEnter = subscribe('sticky-container/enter', this._enter, this.roodNode);
    this._unLeave = subscribe('sticky-container/leave', this._leave, this.roodNode);
  }

  _off() {
    if (this._unEnter) {
      this._unEnter();
    }

    if (this._unLeave) {
      this._unLeave();
    }
  }

  _enter() {
    if (this.state === states.IS_ACTIVE) {
      return;
    }
    this.state = states.IS_ACTIVE;

    add(this.roodNode, 'is-sticky-container-active');
  }

  _leave() {
    if (this.state === states.IS_IDLE) {
      return;
    }
    this.state = states.IS_IDLE;

    remove(this.roodNode, 'is-sticky-container-active');
  }
}

export default StickyContainer;
