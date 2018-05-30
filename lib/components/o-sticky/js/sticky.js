import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import StickySpy from './sticky-spy';
import Enum from '../../../js/enum';
import { subscribe } from '../../../js/pubsub';
import { add, remove } from '../../../js/class-list';
import css from '../../../js/css';

var states = Enum('IS_IN_FLOW', 'IS_STICKY', 'IS_BOTTOM');

var Sticky = function () {
  function Sticky(wcNode) {
    _classCallCheck(this, Sticky);

    _initialiseProps.call(this);

    this.wcNode = wcNode;
    this.state = states.IS_IN_FLOW;
    this.lastDirection = 0;

    this.placeholder = wcNode.querySelector(Sticky.DEFAULTS.placeholderClass);
    this.box = wcNode.querySelector(Sticky.DEFAULTS.boxClass);

    this.spy = StickySpy();
  }

  _createClass(Sticky, [{
    key: '_on',
    value: function _on() {
      this._off();

      this._unActive = subscribe('sticky-container/active', this._update, this._contextNode);
      this._unIdle = subscribe('sticky-container/idle', this._update, this._contextNode);
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

      this.spy.remove();
      delete this.spy;
      delete this.roodNode;
      delete this.placeholder;
      delete this.box;
      delete this._contextNode;
    }
  }, {
    key: 'contextNode',
    set: function set(value) {
      this._contextNode = value;

      this._on();
    }
  }]);

  return Sticky;
}();

Sticky.DEFAULTS = {
  placeholderClass: '.js-sticky__placeholder',
  boxClass: '.js-sticky__box',
  isStickyClass: 'is-sticky-sticky',
  isBottomClass: 'is-sticky-bottom',
  isScrollUp: 'is-sticky-scroll-up',
  isScrollDown: 'is-sticky-scroll-down'
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this._update = function (_ref) {
    var detail = _ref.detail;
    var containerBottom = detail.containerBottom,
        direction = detail.direction,
        forceRepaint = detail.forceRepaint;
    var wcNode = _this.wcNode,
        state = _this.state,
        lastDirection = _this.lastDirection;

    var hasDirectionChanged = direction !== lastDirection;
    var offsetHeight = wcNode.offsetHeight,
        offsetWidth = wcNode.offsetWidth;

    var _wcNode$getBoundingCl = wcNode.getBoundingClientRect(),
        left = _wcNode$getBoundingCl.left,
        top = _wcNode$getBoundingCl.top;

    var isInFlow = top > 0;
    var isSticky = top <= 0 && containerBottom >= offsetHeight;
    var isBottom = top <= 0 && containerBottom < offsetHeight;

    if (hasDirectionChanged && direction === 1) {
      add(wcNode, Sticky.DEFAULTS.isScrollDown);
      remove(wcNode, Sticky.DEFAULTS.isScrollUp);
    } else if (hasDirectionChanged && direction === -1) {
      add(wcNode, Sticky.DEFAULTS.isScrollUp);
      remove(wcNode, Sticky.DEFAULTS.isScrollDown);
    }

    if (isSticky && (forceRepaint || state !== states.IS_STICKY)) {
      _this.state = states.IS_STICKY;

      add(wcNode, Sticky.DEFAULTS.isStickyClass);
      remove(wcNode, Sticky.DEFAULTS.isBottomClass);
      css(_this.placeholder, { height: offsetHeight + 'px' });
      css(_this.box, { left: left + 'px', width: offsetWidth + 'px' });
    }

    if (isBottom && (forceRepaint || state !== states.IS_BOTTOM)) {
      _this.state = states.IS_BOTTOM;

      remove(wcNode, Sticky.DEFAULTS.isStickyClass);
      add(wcNode, Sticky.DEFAULTS.isBottomClass);
      css(_this.placeholder, { height: offsetHeight + 'px' });
      css(_this.box, { left: left + 'px', width: offsetWidth + 'px' });
    }

    if (isInFlow && (forceRepaint || state !== states.IS_IN_FLOW)) {
      _this.state = states.IS_IN_FLOW;

      remove(wcNode, Sticky.DEFAULTS.isStickyClass);
      remove(wcNode, Sticky.DEFAULTS.isBottomClass);

      css(_this.placeholder, { height: '' });
      css(_this.box, { left: '', width: '' });
    }
  };
};

export default Sticky;