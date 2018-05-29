import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _on from '../../../js/on';
import preventOverscroll from '../../../js/prevent-overscroll';
import disableOverscroll from '../../../js/disable-overscroll';
import { add, remove } from '../../../js/class-list';
import { publish, subscribe } from '../../../js/pubsub';

var HeaderMobile = function () {
  function HeaderMobile(wcNode, options) {
    var _this = this;

    _classCallCheck(this, HeaderMobile);

    this.open = function () {
      add(document.body, _this.options.isBodyFrozen);
      add(_this.wcNode, _this.options.isMenuOpenClass);

      _this.on();
    };

    this.close = function () {
      _this.off();

      if (_this.unTransitionEndBackdrop) {
        _this.unTransitionEndBackdrop();
      }

      _this.unTransitionEndBackdrop = _on(_this.backdrop, 'transitionend', function (_ref) {
        var propertyName = _ref.propertyName;

        if (propertyName === 'opacity') {
          _this.unTransitionEndBackdrop();
          remove(_this.backdrop, _this.options.isBackdropFading);

          // reset initial scroll and menu state
          _this.canvas.scrollTop = 0;

          publish('header-mobile/fade-finish', null, _this._contextNode);
        }
      });

      add(_this.backdrop, _this.options.isBackdropFading);
      remove(_this.wcNode, _this.options.isMenuOpenClass);
      remove(document.body, _this.options.isBodyFrozen);
    };

    this.handleCloseClick = function () {
      publish('header-mobile/close', null, _this._contextNode);
    };

    this.wcNode = wcNode;
    this.options = _extends({}, HeaderMobile.DEFAULTS, options);

    this.opened = [];

    this.init();
  }

  _createClass(HeaderMobile, [{
    key: 'init',
    value: function init() {
      this.canvas = this.wcNode.querySelector(this.options.canvas);
      this.backdrop = this.wcNode.querySelector(this.options.backdrop);
    }
  }, {
    key: 'on',
    value: function on() {
      this.off();

      this.offOverscroll = preventOverscroll(this.canvas);
      this.unBackdropClick = _on(this.backdrop, 'click', this.handleCloseClick);
      this.unBackdropOverscroll = disableOverscroll(this.backdrop);
      this.unClose = _on(this.canvas, 'click', this.options.close, this.handleCloseClick);
    }
  }, {
    key: 'off',
    value: function off() {
      if (this.offOverscroll) {
        this.offOverscroll();
      }

      if (this.unBackdropClick) {
        this.unBackdropClick();
      }

      if (this.unBackdropOverscroll) {
        this.unBackdropOverscroll();
      }

      if (this.unClose) {
        this.unClose();
      }
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
    key: 'destroy',
    value: function destroy() {
      this.off();
      this.offContextEnabled();

      delete this.wcNode;
      delete this.canvas;
      delete this.backdrop;
      delete this._contextNode;
    }
  }, {
    key: 'contextNode',
    set: function set(value) {
      this._contextNode = value;

      this.onContextEnabled();
    }
  }]);

  return HeaderMobile;
}();

HeaderMobile.DEFAULTS = {
  canvas: '.js-header-mobile__canvas',
  backdrop: '.js-header-mobile__backdrop',
  close: 'js-header-mobile-close',
  isMenuOpenClass: 'is-mobile-menu-open',
  isBackdropFading: 'is-mobile-backdrop-fading',
  isBodyFrozen: 'is-body-frozen'
};


export default HeaderMobile;