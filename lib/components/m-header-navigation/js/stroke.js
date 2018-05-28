import css from '../../../js/css';
import on from '../../../js/on';
import ownerWindow from '../../../js/owner-window';
import { requestAnimationFrame, cancelAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove, has } from '../../../js/class-list';
import UiEvents from '../../../js/ui-events';

var Stroke = function (_UiEvents) {
  babelHelpers.inherits(Stroke, _UiEvents);

  function Stroke(wcNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    babelHelpers.classCallCheck(this, Stroke);

    var _this = babelHelpers.possibleConstructorReturn(this, (Stroke.__proto__ || Object.getPrototypeOf(Stroke)).call(this, wcNode, {
      containerClass: '.js-header-navigation__list',
      toggleClass: Stroke.DEFAULTS.toggleClass,
      closeClass: 'js-header-navigation-close',
      sameClickClose: !options.simpleMenu,
      preventDefault: !options.simpleMenu,
      outerClose: !options.simpleMenu,
      escapeClose: !options.simpleMenu
    }));

    _this._handleResize = function () {
      if (_this.resizeTimeout) {
        cancelAnimationFrame(_this.resizeTimeout);
        _this.resizeTimeout = null;
      }

      _this.resizeTimeout = requestAnimationFrame(function () {
        var _this$_parentNode = _this._parentNode,
            offsetWidth = _this$_parentNode.offsetWidth,
            offsetLeft = _this$_parentNode.offsetLeft;


        if (offsetWidth && offsetLeft) {
          css(_this._stroke, {
            width: offsetWidth + 'px',
            left: offsetLeft + 'px'
          });
        }
      });
    };

    _this._handleTransitionEnd = function (e) {
      if (e.propertyName === 'left') {
        _this._offMoving();
        _this._handleStaticState(true);
      }
    };

    _this.wcNode = wcNode;
    _this.options = babelHelpers.extends({}, Stroke.DEFAULTS, options);

    _this._isStatic = false;
    return _this;
  }

  babelHelpers.createClass(Stroke, [{
    key: 'init',
    value: function init() {
      this._contextNode.style.position = 'relative';

      this._list = this._contextNode.querySelector(this.options.list);

      this._stroke = document.createElement('div');
      this._stroke.className = this.options.strokeClass;

      this._list.appendChild(this._stroke);
    }
  }, {
    key: 'onContextEnabled',
    value: function onContextEnabled() {
      // check if context is ready
      if (this._contextNode) {
        var options = this.options;


        this._init(this._contextNode, {
          containerClass: '.js-header-navigation__list',
          toggleClass: Stroke.DEFAULTS.toggleClass,
          closeClass: 'js-header-navigation-close',
          sameClickClose: !options.simpleMenu,
          preventDefault: !options.simpleMenu,
          outerClose: !options.simpleMenu,
          escapeClose: !options.simpleMenu
        });

        this.init();
      }
    }
  }, {
    key: 'enter',
    value: function enter(node) {
      var _this2 = this;

      var parentNode = node.parentNode;

      this._node = node;
      this._parentNode = parentNode;

      if (has(node, this.options.activeClass)) {
        this._activeNode = node;

        add(node, this.options.activeOpenClass, this.options.activeMoveClass);
      }

      requestAnimationFrame(function () {
        _this2._handleStaticState(true, true);
        add(_this2._list, _this2.options.interactiveClass);

        requestAnimationFrame(function () {
          add(_this2._stroke, _this2.options.enterClass);
          css(_this2._stroke, {
            width: parentNode.offsetWidth + 'px',
            left: parentNode.offsetLeft + 'px'
          });
        });
      });
    }
  }, {
    key: 'move',
    value: function move(node) {
      var _this3 = this;

      var parentNode = node.parentNode;

      this._node = node;
      this._parentNode = parentNode;

      if (this._activeNode) {
        remove(this._activeNode, this.options.activeMoveClass);
      }

      requestAnimationFrame(function () {
        _this3._handleStaticState(false);

        requestAnimationFrame(function () {
          add(_this3._stroke, _this3.options.moveClass);
          css(_this3._stroke, {
            width: parentNode.offsetWidth + 'px',
            left: parentNode.offsetLeft + 'px'
          });

          _this3._onMoving();
        });
      });
    }
  }, {
    key: 'leave',
    value: function leave() {
      var _this4 = this;

      var _node = this._node;


      this._offMoving();

      if (this._activeNode) {
        remove(this._activeNode, this.options.activeMoveClass, this.options.activeOpenClass);
        this._activeNode = null;
      }

      if (has(_node, this.options.activeClass)) {
        add(_node, this.options.activeOpenClass);
      }

      requestAnimationFrame(function () {
        _this4._handleStaticState(true);
        remove(_this4._list, _this4.options.interactiveClass);

        requestAnimationFrame(function () {
          remove(_this4._stroke, _this4.options.moveClass, _this4.options.enterClass);
          remove(_node, _this4.options.activeOpenClass);
        });

        _this4._parentNode = null;
        _this4._node = null;
      });
    }
  }, {
    key: '_onMoving',
    value: function _onMoving() {
      this._offMoving();

      this._unResize = on(ownerWindow(this.wcNode), 'resize', this._handleResize);
      this._unTransitionEnd = on(this._stroke, 'transitionend', this._handleTransitionEnd);
    }
  }, {
    key: '_offMoving',
    value: function _offMoving() {
      if (this._unResize) {
        this._unResize();
      }

      if (this._unTransitionEnd) {
        this._unTransitionEnd();
      }
    }
  }, {
    key: '_handleStaticState',
    value: function _handleStaticState(isStatic, force) {
      var _this5 = this;

      if (!force && isStatic === this._isStatic) {
        return;
      }

      this._isStatic = isStatic;

      // Edge animation broken
      // see https://github.com/axa-ch/patterns-library/issues/304
      add(this._stroke, this.options.transitionOffClass);

      if (isStatic) {
        this._node.appendChild(this._stroke);
        add(this._stroke, this.options.staticClass);
      } else {
        this._list.appendChild(this._stroke);
        remove(this._stroke, this.options.staticClass);
      }

      // Edge animation broken
      // see https://github.com/axa-ch/patterns-library/issues/304
      requestAnimationFrame(function () {
        remove(_this5._stroke, _this5.options.transitionOffClass);
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      babelHelpers.get(Stroke.prototype.__proto__ || Object.getPrototypeOf(Stroke.prototype), 'destroy', this).call(this);

      this._offMoving();

      if (this._stroke) {
        if (this._stroke.parentNode) {
          this._stroke.parentNode.removeChild(this._stroke);
        }
        delete this._stroke;
      }

      delete this._contextNode;
      delete this.wcNode;
      delete this.options;
    }
  }, {
    key: 'contextNode',
    set: function set(value) {
      this._contextNode = value;

      this.onContextEnabled();
    }
  }]);
  return Stroke;
}(UiEvents);

Stroke.DEFAULTS = {
  strokeClass: 'a-stroke',
  list: '.js-header-navigation__list',
  toggleClass: 'js-header-navigation__list-link',
  enterClass: 'is-stroke-enter',
  moveClass: 'is-stroke-move',
  staticClass: 'is-stroke-static',
  interactiveClass: 'is-stroke-interactive',
  activeClass: 'is-header-navigation-active',
  activeOpenClass: 'is-stroke-active-open',
  activeMoveClass: 'is-stroke-active-move',
  transitionOffClass: 'is-stroke-transition-off'
};


export default Stroke;