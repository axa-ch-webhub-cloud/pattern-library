import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import on from '../../../js/on';
import getScrollTop from '../../../js/get-scroll-top';
import _remove from '../../../js/array-remove';
import { publish, subscribe } from '../../../js/pubsub';
import { requestAnimationFrame } from '../../../js/request-animation-frame';

var instance = void 0;
var instanceCount = 0;
var criticalEvents = ['resize', 'orientationchange'].join(' ');
var events = [criticalEvents, 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'].join(' ');

var StickySpy = function () {
  function StickySpy() {
    var _this = this;

    _classCallCheck(this, StickySpy);

    this._change = function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          type = _ref.type;

      if (criticalEvents.indexOf(type) >= 0) {
        _this.forceRepaint = true;
      }

      if (_this.framePending) {
        return;
      }

      requestAnimationFrame(function () {
        // all spied container nodes
        var containerNodes = _this.containerNodes,
            forceRepaint = _this.forceRepaint,
            lastScrollTop = _this.lastScrollTop,
            isDirectionFrozen = _this.isDirectionFrozen,
            lastDirection = _this.lastDirection;
        // the scroll position of the y-axis

        var scrollTop = getScrollTop();
        // the diference between the last scroll position
        var diffTop = scrollTop - lastScrollTop;
        // the scroll direction -> -1: top, 0: none, 1: bottom
        // eslint-disable-next-line no-nested-ternary
        var direction = isDirectionFrozen ? lastDirection : diffTop > 0 ? 1 : diffTop < 0 ? -1 : lastDirection;

        for (var i = 0, length = containerNodes.length; i < length; i++) {
          var container = containerNodes[i];

          var _container$getBoundin = container.getBoundingClientRect(),
              top = _container$getBoundin.top,
              bottom = _container$getBoundin.bottom;

          var isActiveContainer = top <= 0 && bottom >= 0;
          var eventType = isActiveContainer ? 'active' : 'idle';

          publish('sticky-container/' + eventType, {
            containerTop: top,
            containerBottom: bottom,
            direction: direction,
            forceRepaint: forceRepaint
          }, container);
        }

        _this.lastScrollTop = scrollTop;
        _this.lastDirection = direction;

        _this.framePending = false;
        _this.forceRepaint = false;
      });
    };

    this._freezeDirection = function () {
      _this.isDirectionFrozen = true;
      _this.lastDirection = -1;
    };

    this._thawDirection = function () {
      _this.isDirectionFrozen = false;
    };

    this.forceRepaint = false;
    this.framePending = false;
    this.lastScrollTop = 0;
    this.isDirectionFrozen = false;
    this.containerNodes = [];

    this._on();
  }

  _createClass(StickySpy, [{
    key: 'addContainer',
    value: function addContainer(node) {
      this.containerNodes.push(node);

      this._change();
    }
  }, {
    key: '_on',
    value: function _on() {
      this._off();

      this._unChange = on(window, events, this._change);
      this._unFreezeDirection = subscribe('sticky-container/freeze-direction', this._freezeDirection);
      this._unThawDirection = subscribe('sticky-container/thaw-direction', this._thawDirection);
    }
  }, {
    key: '_off',
    value: function _off() {
      if (this._unChange) {
        this._unChange();
      }

      if (this._unFreezeDirection) {
        this._unFreezeDirection();
      }

      if (this._unThawDirection) {
        this._unThawDirection();
      }
    }
  }, {
    key: 'remove',
    value: function remove(container) {
      if (container) {
        _remove(this.containerNodes, container);
      }

      // eslint-disable-next-line no-plusplus
      instanceCount--;

      if (instanceCount <= 0 && instance) {
        this._off();

        delete this.containerNodes;
        instance = null;
      }
    }
  }]);

  return StickySpy;
}();

export default function factory() {
  if (!instance) {
    instance = new StickySpy();
  }

  // eslint-disable-next-line no-plusplus
  instanceCount++;

  return instance;
}