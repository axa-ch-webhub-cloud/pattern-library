import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _on from '../../../js/on';
import { add, remove } from '../../../js/class-list';
import { subscribe } from '../../../js/pubsub';

var HeaderMobileNavigation = function () {
  function HeaderMobileNavigation(wcNode, options) {
    var _this = this;

    _classCallCheck(this, HeaderMobileNavigation);

    this.open = function () {
      _this.isOpen = true;
    };

    this.close = function () {
      _this.isOpen = false;
    };

    this.fadeFinish = function () {
      if (_this.isOpen) {
        return;
      }

      // reset initial scroll and menu state
      var open = _this.opened.pop();

      while (open) {
        var _open = open,
            parentNode = _open.parentNode;

        remove(parentNode, _this.options.isSubMenuOpenClass);

        open = _this.opened.pop();
      }
    };

    this.handleCategoryClick = function (e, delegateTarget) {
      if (!_this.options.preventDefault) {
        e.preventDefault();
      }

      var parentNode = delegateTarget.parentNode;


      if (parentNode.lastChild !== delegateTarget) {
        var canvas = _this.wcNode.parentNode.parentNode;
        var scrollTop = canvas.scrollTop;


        add(parentNode, _this.options.isSubMenuOpenClass);

        canvas.scrollTop = 0;

        _this.opened.push({
          parentNode: parentNode,
          scrollTop: scrollTop
        });
      }
    };

    this.handleBackClick = function (e) {
      if (!_this.options.preventDefault) {
        e.preventDefault();
      }

      var _opened$pop = _this.opened.pop(),
          parentNode = _opened$pop.parentNode,
          scrollTop = _opened$pop.scrollTop;

      var canvas = _this.wcNode.parentNode.parentNode;

      remove(parentNode, _this.options.isSubMenuOpenClass);

      canvas.scrollTop = scrollTop;
    };

    this.wcNode = wcNode;
    this.options = _extends({}, HeaderMobileNavigation.DEFAULTS, options);

    this.isOpen = false;
    this.opened = [];

    this.init();
  }

  _createClass(HeaderMobileNavigation, [{
    key: 'init',
    value: function init() {
      this.nav = this.wcNode.querySelector(this.options.nav);

      this.on();
    }
  }, {
    key: 'on',
    value: function on() {
      this.off();

      this.unCategoryClick = _on(this.nav, 'click', this.options.category, this.handleCategoryClick, { passive: false });
      this.unBackClick = _on(this.nav, 'click', this.options.back, this.handleBackClick, { passive: false });
    }
  }, {
    key: 'off',
    value: function off() {
      if (this.unCategoryClick) {
        this.unCategoryClick();
      }

      if (this.unBackClick) {
        this.unBackClick();
      }

      this.offContextEnabled();
    }
  }, {
    key: 'onContextEnabled',
    value: function onContextEnabled() {
      // check if context is ready
      if (this._contextNode) {
        this.offContextEnabled();

        this.unSubscribeOpen = subscribe('header-mobile/open', this.open, this._contextNode);
        this.unSubscribeClose = subscribe('header-mobile/close', this.close, this._contextNode);
        this.unSubscribeFadeFinish = subscribe('header-mobile/fade-finish', this.fadeFinish, this._contextNode);
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

      delete this.wcNode;
      delete this.nav;
      delete this._contextNode;
      delete this.opened;
    }
  }, {
    key: 'contextNode',
    set: function set(value) {
      this._contextNode = value;

      this.onContextEnabled();
    }
  }]);

  return HeaderMobileNavigation;
}();

HeaderMobileNavigation.DEFAULTS = {
  nav: '.js-header-mobile-navigation__nav',
  category: 'js-header-mobile-navigation__category',
  back: 'js-header-mobile-navigation__back',
  isSubMenuOpenClass: 'is-header-mobile-navigation-nav-open'
};


export default HeaderMobileNavigation;