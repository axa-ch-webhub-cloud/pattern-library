import _on from '../../../js/on';
import fire from '../../../js/fire';

/**
 * @fires HeaderLogo#axa-click
 */

var HeaderLogo = function () {
  function HeaderLogo(wcNode) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    babelHelpers.classCallCheck(this, HeaderLogo);

    this.wcNode = wcNode;
    this.options = babelHelpers.extends({}, HeaderLogo.DEFAULTS, options);

    this.handleClick = this.handleClick.bind(this);

    this.init();
  }

  babelHelpers.createClass(HeaderLogo, [{
    key: 'init',
    value: function init() {
      this.link = this.wcNode.querySelector(this.options.link);

      this.on();
    }
  }, {
    key: 'on',
    value: function on() {
      this.off();

      this.unClick = _on(this.link, 'click', this.handleClick, { passive: false });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      /**
       * axa-click event.
       *
       * @event HeaderLogo#axa-click
       * @type {null}
       */
      var cancelled = fire(this.wcNode, 'axa-click', null, { bubbles: true, cancelable: true, composed: true });

      if (!cancelled) {
        event.preventDefault();
      }
    }
  }, {
    key: 'off',
    value: function off() {
      if (this.unClick) {
        this.unClick();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.off();

      delete this.link;
      delete this.wcNode;
      delete this.options;
      delete this.handleClick;
    }
  }]);
  return HeaderLogo;
}();

HeaderLogo.DEFAULTS = {
  link: '.js-header-logo__link'
};


export default HeaderLogo;