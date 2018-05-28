import { add, remove } from '../../../js/class-list';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import forceRepaint from '../../../js/force-repaint';
import UiEvents from '../../../js/ui-events';
import isEdge from '../../../js/shame/is-edge-SHAME';

var HeaderNavigation = function (_UiEvents) {
  babelHelpers.inherits(HeaderNavigation, _UiEvents);

  function HeaderNavigation(wcNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    babelHelpers.classCallCheck(this, HeaderNavigation);

    var _this = babelHelpers.possibleConstructorReturn(this, (HeaderNavigation.__proto__ || Object.getPrototypeOf(HeaderNavigation)).call(this, wcNode, {
      containerClass: '.js-header-navigation__list',
      toggleClass: HeaderNavigation.DEFAULTS.toggleClass,
      closeClass: 'js-header-navigation-close',
      preventDefault: options.preventDefault || !options.simpleMenu,
      outerClose: !options.simpleMenu,
      escapeClose: !options.simpleMenu
    }));

    _this.wcNode = wcNode;
    _this.options = babelHelpers.extends({}, HeaderNavigation.DEFAULTS, {
      useDefaultEvent: !!options.useDefaultEvent || !!options.simpleMenu
    }, options);

    _this.init();
    return _this;
  }

  babelHelpers.createClass(HeaderNavigation, [{
    key: 'init',
    value: function init() {
      this.list = this.wcNode.querySelector(this.options.list);
    }
  }, {
    key: 'enter',
    value: function enter(node) {
      var _this2 = this;

      var parentNode = node.parentNode;


      add(parentNode, this.options.openClass);

      if (isEdge) {
        // @todo: can we fix this Edge problem better?
        requestAnimationFrame(function () {
          // Edge 16 won't repaint -> force it
          // see https://github.com/axa-ch/patterns-library/issues/304
          forceRepaint(parentNode.querySelector(_this2.options.subNavi));

          requestAnimationFrame(function () {
            // Edge 16 won't repaint -> force it again!
            // see https://github.com/axa-ch/patterns-library/issues/367
            forceRepaint(parentNode.querySelector(_this2.options.subNavi));
          });
        });
      }
    }
  }, {
    key: 'move',
    value: function move(node, lastNode) {
      var parentNode = node.parentNode;


      remove(lastNode.parentNode, this.options.openClass);
      add(parentNode, this.options.openClass);

      if (isEdge) {
        // Edge 16 won't repaint -> force it
        // see https://github.com/axa-ch/patterns-library/issues/304
        forceRepaint(parentNode.querySelector(this.options.subNavi));
      }
    }
  }, {
    key: 'leave',
    value: function leave(node) {
      remove(node.parentNode, this.options.openClass);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      babelHelpers.get(HeaderNavigation.prototype.__proto__ || Object.getPrototypeOf(HeaderNavigation.prototype), 'destroy', this).call(this);

      delete this.wcNode;
      delete this.options;
    }
  }]);
  return HeaderNavigation;
}(UiEvents);

HeaderNavigation.DEFAULTS = {
  list: '.js-header-navigation__list',
  toggleClass: 'js-header-navigation__list-link',
  subNavi: '.js-header-sub-navigation',
  openClass: 'is-header-sub-navigation-open'
};


export default HeaderNavigation;