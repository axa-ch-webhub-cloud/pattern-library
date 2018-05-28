import UiEvents from '../../../js/ui-events';
import _on from '../../../js/on';
import { requestAnimationFrame } from '../../../js/request-animation-frame';
import { add, remove } from '../../../js/class-list';
import { publish, subscribe } from '../../../js/pubsub';

var AccordionItem = function (_UiEvents) {
  babelHelpers.inherits(AccordionItem, _UiEvents);

  function AccordionItem(wcNode, options) {
    babelHelpers.classCallCheck(this, AccordionItem);

    // eslint-disable-next-line no-param-reassign
    options = babelHelpers.extends({}, AccordionItem.DEFAULTS, options);

    var _this = babelHelpers.possibleConstructorReturn(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).call(this, wcNode, options));

    _this.toggleState = function (_ref) {
      var node = _ref.detail;

      if (_this.wcNode === node) {
        if (_this.isOpen) {
          _this.close();
        } else {
          _this.open();
        }
      } else if (_this.isOpen) {
        _this.close();
      }
    };

    _this.handleTransitionEnd = function (e) {
      if (e.propertyName === 'height') {
        e.target.style.height = '';

        _this.offInteractive();
      }
    };

    _this.handleToggleClick = function () {
      publish('accordion-item/toggle', _this.wcNode, _this._contextNode);
    };

    _this.isOpen = false;

    _this.options = options;
    _this.wcNode = wcNode;

    _this.init();
    return _this;
  }

  babelHelpers.createClass(AccordionItem, [{
    key: 'init',
    value: function init() {
      this.toggle = this.wcNode.querySelector(this.options.toggle);
      this.body = this.wcNode.querySelector(this.options.body);

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

      this.unTransitionEnd = _on(this.body, 'transitionend', this.handleTransitionEnd);
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
    key: 'onContextEnabled',
    value: function onContextEnabled() {
      if (this._contextNode) {
        this.offContextEnabled();

        this.unSubscribeToggle = subscribe('accordion-item/toggle', this.toggleState, this._contextNode);
      }
    }
  }, {
    key: 'offContextEnabled',
    value: function offContextEnabled() {
      if (this.unSubscribeToggle) {
        this.unSubscribeToggle();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      babelHelpers.get(AccordionItem.prototype.__proto__ || Object.getPrototypeOf(AccordionItem.prototype), 'destroy', this).call(this);

      this.off();
      this.offInteractive();
      this.offContextEnabled();

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
  return AccordionItem;
}(UiEvents);

AccordionItem.DEFAULTS = {
  containerClass: false,
  toggle: '.js-accordion-item__toggle',
  body: '.js-accordion-item__body',
  isOpen: 'is-accordion-item-open'
};


export default AccordionItem;