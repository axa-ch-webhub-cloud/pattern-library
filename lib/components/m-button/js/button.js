import _on from '../../../js/on';
import fire from '../../../js/fire';

/**
 * @fires Button#axa-click
 */

var Button = function () {
  function Button(wcNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    babelHelpers.classCallCheck(this, Button);

    this.wcNode = wcNode;

    this.options = babelHelpers.extends({}, Button.DEFAULTS, options);

    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  babelHelpers.createClass(Button, [{
    key: 'init',
    value: function init() {
      this.button = this.wcNode.querySelector(this.options.button);

      this.on();
    }
  }, {
    key: 'on',
    value: function on() {
      this.off();

      this.unClick = _on(this.button, 'click', this.handleClick, {
        passive: false
      });
    }
  }, {
    key: 'off',
    value: function off() {
      if (this.unClick) {
        this.unClick();
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      /**
       * axa-click event.
       *
       * @event Button#axa-click
       * @type {null}
       */
      var cancelled = fire(this.wcNode, 'axa-click', null, { bubbles: true, cancelable: true, composed: true });

      if (!cancelled) {
        event.preventDefault();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.off();

      if (this.button) {
        delete this.button;
      }

      if (this.wcNode) {
        delete this.wcNode;
      }

      if (this.options) {
        delete this.options;
      }

      delete this.handleClick;
    }
  }]);
  return Button;
}();

Button.DEFAULTS = {
  button: '.js-button'
};


export default Button;