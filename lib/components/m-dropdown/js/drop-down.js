import UiEvents from '../../../js/ui-events';
import on from '../../../js/on';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove } from '../../../js/class-list';

var DropDown = function (_UiEvents) {
  babelHelpers.inherits(DropDown, _UiEvents);

  function DropDown(wcNode, options) {
    babelHelpers.classCallCheck(this, DropDown);

    // eslint-disable-next-line no-param-reassign
    options = babelHelpers.extends({}, DropDown.DEFAULTS, options);

    var _this = babelHelpers.possibleConstructorReturn(this, (DropDown.__proto__ || Object.getPrototypeOf(DropDown)).call(this, wcNode, options));

    _this.handleTransitionEnd = function (e) {
      if (e.propertyName === 'height') {
        if (_this.isOpen) {
          e.target.style.height = '';
        }

        _this.offInteractive();

        remove(_this.wcNode, _this.options.isAnimatingClass);
      }
    };

    _this.options = options;
    _this.wcNode = wcNode;
    _this.isOpen = false;
    return _this;
  }

  babelHelpers.createClass(DropDown, [{
    key: 'onInteractive',
    value: function onInteractive() {
      this.offInteractive();

      this.unTransitionEnd = on(this.wcNode, 'transitionend', this.handleTransitionEnd);
    }
  }, {
    key: 'offInteractive',
    value: function offInteractive() {
      if (this.unTransitionEnd) {
        this.unTransitionEnd();
      }
    }
  }, {
    key: 'enter',
    value: function enter(node) {
      var parentNode = node.parentNode;
      var lastElementChild = parentNode.lastElementChild;


      if (this.isOpen) {
        return;
      }
      this.isOpen = true;

      add(parentNode, this.options.isAnimatingClass);

      lastElementChild.style.overflow = 'scroll';
      var scrollHeight = lastElementChild.scrollHeight;

      lastElementChild.style.overflow = '';

      this.onInteractive();

      lastElementChild.style.height = scrollHeight + 'px';

      add(parentNode, this.options.isOpenClass);
    }
  }, {
    key: 'leave',
    value: function leave(node) {
      var _this2 = this;

      var parentNode = node.parentNode;
      var lastElementChild = parentNode.lastElementChild;
      var scrollHeight = lastElementChild.scrollHeight;


      if (!this.isOpen) {
        return;
      }
      this.isOpen = false;

      this.onInteractive();

      add(parentNode, this.options.isAnimatingClass);

      requestAnimationFrame(function () {
        lastElementChild.style.height = scrollHeight + 'px';

        requestAnimationFrame(function () {
          remove(parentNode, _this2.options.isOpenClass);
          lastElementChild.style.height = 0;
        });
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      var node = this.wcNode.querySelector(this.options.containerClass);

      if (node) {
        var lastElementChild = node.lastElementChild;


        lastElementChild.style.height = '';
        remove(node, this.options.isOpenClass);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      babelHelpers.get(DropDown.prototype.__proto__ || Object.getPrototypeOf(DropDown.prototype), 'destroy', this).call(this);

      this.reset();

      delete this.wcNode;
      delete this.options;
    }
  }]);
  return DropDown;
}(UiEvents);

DropDown.DEFAULTS = {
  containerClass: '.js-dropdown',
  toggleClass: 'js-dropdown__toggle',
  isOpenClass: 'is-dropdown-open',
  isAnimatingClass: 'is-dropdown-animating'
};


export default DropDown;