import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import StickySpy from './sticky-spy';
import Enum from '../../../js/enum';
import { subscribe } from '../../../js/pubsub';
import { add, remove } from '../../../js/class-list';

var states = Enum('IS_IDLE', 'IS_ACTIVE');

var StickyContainer = function () {
  function StickyContainer(wcNode) {
    var _this = this;

    _classCallCheck(this, StickyContainer);

    this._active = function () {
      if (_this.state === states.IS_ACTIVE) {
        return;
      }
      _this.state = states.IS_ACTIVE;

      add(_this.roodNode, StickyContainer.DEFAULTS.isActiveClass);
      remove(_this.roodNode, StickyContainer.DEFAULTS.isIdleClass);
    };

    this._idle = function () {
      if (_this.state === states.IS_IDLE) {
        return;
      }
      _this.state = states.IS_IDLE;

      add(_this.roodNode, StickyContainer.DEFAULTS.isIdleClass);
      remove(_this.roodNode, StickyContainer.DEFAULTS.isActiveClass);
    };

    this.roodNode = wcNode;
    this.state = states.IS_IDLE;

    this.spy = StickySpy();
    this.spy.addContainer(wcNode);

    this._on();
  }

  _createClass(StickyContainer, [{
    key: '_on',
    value: function _on() {
      this._off();

      this._unActive = subscribe('sticky-container/active', this._active, this.roodNode);
      this._unIdle = subscribe('sticky-container/idle', this._idle, this.roodNode);
    }
  }, {
    key: '_off',
    value: function _off() {
      if (this._unActive) {
        this._unActive();
      }

      if (this._unIdle) {
        this._unIdle();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this._off();

      this.spy.remove(this.roodNode);
      delete this.spy;
      delete this.roodNode;
    }
  }]);

  return StickyContainer;
}();

StickyContainer.DEFAULTS = {
  isActiveClass: 'is-sticky-container-active',
  isIdleClass: 'is-sticky-container-idle'
};


export default StickyContainer;