import UiEvents from '../../../js/ui-events';
import _on from '../../../js/on';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove } from '../../../js/class-list';

var FormGroup = function (_UiEvents) {
  babelHelpers.inherits(FormGroup, _UiEvents);

  function FormGroup(wcNode, options) {
    babelHelpers.classCallCheck(this, FormGroup);

    // eslint-disable-next-line no-param-reassign
    options = babelHelpers.extends({}, FormGroup.DEFAULTS, options);

    var _this = babelHelpers.possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).call(this, wcNode, options));

    _this.toggleState = function () {
      if (_this.isOpen) {
        _this.close();
      } else {
        _this.open();
      }
    };

    _this.handleTransitionEnd = function (e) {
      if (e.propertyName === 'height') {
        e.target.style.height = '';

        _this.offInteractive();
      }
    };

    _this.handleToggleClick = function () {
      _this.toggleState();
    };

    _this.isOpen = false;

    _this.options = options;
    _this.wcNode = wcNode;

    _this.init();
    return _this;
  }

  babelHelpers.createClass(FormGroup, [{
    key: 'init',
    value: function init() {
      this.toggle = this.wcNode.querySelector(this.options.toggle);
      this.info = this.wcNode.querySelector(this.options.info);

      this.on();
    }
  }, {
    key: 'on',
    value: function on() {
      this.off();

      this.offToggleClicked = _on(this.toggle, 'click', this.handleToggleClick);
    }
  }, {
    key: 'off',
    value: function off() {
      if (this.offToggleClicked) {
        this.offToggleClicked();
      }
    }
  }, {
    key: 'onInteractive',
    value: function onInteractive() {
      this.offInteractive();

      this.unTransitionEnd = _on(this.info, 'transitionend', this.handleTransitionEnd);
    }
  }, {
    key: 'offInteractive',
    value: function offInteractive() {
      if (this.unTransitionEnd) {
        this.unTransitionEnd();
      }
    }
  }, {
    key: 'open',
    value: function open() {
      var parentNode = this.wcNode;
      var lastElementChild = parentNode.lastElementChild;


      if (this.isOpen) {
        return;
      }

      this.isOpen = true;

      lastElementChild.style.overflow = 'scroll';
      var scrollHeight = lastElementChild.scrollHeight;

      lastElementChild.style.overflow = '';

      this.onInteractive();

      lastElementChild.style.height = scrollHeight + 'px';

      add(parentNode, this.options.isOpen);
    }
  }, {
    key: 'close',
    value: function close() {
      var _this2 = this;

      var parentNode = this.wcNode;
      var lastElementChild = parentNode.lastElementChild;
      var scrollHeight = lastElementChild.scrollHeight;


      if (!this.isOpen) {
        return;
      }

      this.isOpen = false;

      this.offInteractive();

      requestAnimationFrame(function () {
        lastElementChild.style.height = scrollHeight + 'px';

        requestAnimationFrame(function () {
          remove(parentNode, _this2.options.isOpen);
          lastElementChild.style.height = 0;
        });
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      babelHelpers.get(FormGroup.prototype.__proto__ || Object.getPrototypeOf(FormGroup.prototype), 'destroy', this).call(this);

      this.off();
      this.offInteractive();

      delete this.wcNode;
      delete this.options;
    }
  }]);
  return FormGroup;
}(UiEvents);

FormGroup.DEFAULTS = {
  containerClass: false,
  toggle: '.js-form-group-info__toggle',
  info: '.js-form-group__info',
  labelIconWrapper: '.js-form-group__label-icon-wrapper',
  isOpen: 'is-form-group-info-open'
};


export default FormGroup;