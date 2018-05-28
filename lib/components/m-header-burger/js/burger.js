import Enum from '../../../js/enum';
import _on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import posY from '../../../js/pos-y';
import scrollTo from '../../../js/scroll-to';
import getScrollTop from '../../../js/get-scroll-top';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove } from '../../../js/class-list';
import { publish, subscribe } from '../../../js/pubsub';

var EVENTS = Enum('click', 'resize', 'keyup');

var Burger = function () {
  function Burger(wcNode, options) {
    var _this = this;

    babelHelpers.classCallCheck(this, Burger);

    this._handleBurgerClick = function (e) {
      e.preventDefault();

      if (_this.isOpen) {
        _this.close();
      } else {
        _this.open();
      }
    };

    this._handleResize = function () {
      _this.close();
    };

    this._handleKeyUp = function (e) {
      var key = e.key,
          keyCode = e.keyCode;

      var isEscape = key === EVENTS.ESCAPE || key === EVENTS.ESC || keyCode === 27;

      if (isEscape) {
        e.preventDefault();

        _this.close();
      }
    };

    this.open = function (e) {
      if (_this.isOpen) {
        return;
      }

      _this.isOpen = true;

      // @TODO: quick fix for scroll position
      // turns out it needs to scroll to sticky elements holder
      // turns out further, that this triggers scroll events
      var y = posY(_this.wcNode);

      if (y !== 0 && y !== getScrollTop()) {
        publish('sticky-container/freeze-direction');
        // @TODO: This scroll to the `axa-sticky` parent node, should be selectable or contextual
        scrollTo(_this.wcNode.parentNode.parentNode.parentNode.parentNode);
        requestAnimationFrame(function () {
          setTimeout(function () {
            publish('sticky-container/thaw-direction');
          }, 50);
        });
      }

      add(_this.burger, _this.options.burgerState);

      if (!e && _this._contextNode) {
        publish('header-mobile/open', null, _this._contextNode);
      }
    };

    this.close = function (e) {
      if (!_this.isOpen) {
        return;
      }

      _this.isOpen = false;

      remove(_this.burger, _this.options.burgerState);

      if (!e && _this._contextNode) {
        publish('header-mobile/close', null, _this._contextNode);
      }
    };

    this.wcNode = wcNode;
    this.options = babelHelpers.extends({}, Burger.DEFAULTS, options);
    this.isOpen = false;

    this.init();
  }

  babelHelpers.createClass(Burger, [{
    key: 'init',
    value: function init() {
      this.burger = this.wcNode.querySelector(this.options.burger);

      this.on();
    }
  }, {
    key: 'onContextEnabled',
    value: function onContextEnabled() {
      // check if context is ready
      if (this._contextNode) {
        this.offContextEnabled();

        this.unSubscribeOpen = subscribe('header-mobile/open', this.open, this._contextNode);
        this.unSubscribeClose = subscribe('header-mobile/close', this.close, this._contextNode);
      }
    }
  }, {
    key: 'offContextEnabled',
    value: function offContextEnabled() {
      if (this.unSubscribeOpen) {
        this.unSubscribeOpen();
      }

      if (this.unSubscribeClose) {
        this.unSubscribeClose();
      }
    }
  }, {
    key: 'on',
    value: function on() {
      this.off();

      this._unBurgerClick = _on(this.burger, EVENTS.CLICK, this._handleBurgerClick, { passive: false });
      this._unResize = _on(ownerWindow(this.wcNode), EVENTS.RESIZE, this._handleResize);
      this._unCloseEscape = _on(this.wcNode.ownerDocument, EVENTS.KEYUP, this._handleKeyUp, { passive: false });
    }
  }, {
    key: 'off',
    value: function off() {
      if (this._unBurgerClick) {
        this._unBurgerClick();
      }

      if (this._unResize) {
        this._unResize();
      }

      if (this._unCloseEscape) {
        this._unCloseEscape();
      }

      this.offContextEnabled();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.off();

      delete this.burger;
    }
  }, {
    key: 'contextNode',
    set: function set(value) {
      this._contextNode = value;

      this.onContextEnabled();
    }
  }]);
  return Burger;
}();

Burger.DEFAULTS = {
  burger: '.js-header-burger__button',
  burgerState: 'is-burger-open'
};


export default Burger;