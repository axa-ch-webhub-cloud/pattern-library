import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

import DisclaimerHandler from './js/disclaimer-handler';

var AXACookieDisclaimer = function (_BaseComponentGlobal) {
  _inherits(AXACookieDisclaimer, _BaseComponentGlobal);

  _createClass(AXACookieDisclaimer, null, [{
    key: 'observedAttributes',


    // Specify observed attributes so that attributeChangedCallback will work,
    // this is essential for external re-rendering trigger.
    get: function get() {
      return ['classes', 'button-name', 'title', 'href', 'link-title', 'fixed'];
    }
  }]);

  function AXACookieDisclaimer() {
    _classCallCheck(this, AXACookieDisclaimer);

    var _this = _possibleConstructorReturn(this, (AXACookieDisclaimer.__proto__ || _Object$getPrototypeOf(AXACookieDisclaimer)).call(this, styles, template));

    _this.disclaimerHandler = new DisclaimerHandler(_this);
    // does this provide context (See docs for context) ?
    // this.enableContext()

    // or do you want to consume a specific context
    // this.selectContext('axa-context-provider');
    return _this;
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  _createClass(AXACookieDisclaimer, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXACookieDisclaimer.prototype.__proto__ || _Object$getPrototypeOf(AXACookieDisclaimer.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' o-cookie-disclaimer';
      // Your DOM interaction here, but keep it decoupled.
      // If you don't have any, just remove this function
    }

    // You have some special logic? Or need to update the web-components DOM node itself?
    // Then don't forget to make sure that incremental rendering works properly.
    // attributeChangedCallback(name, oldValue, newValue) {
    //   super.attributeChangedCallback(name, oldValue, newValue);
    // }

    // You may want to update stuff before rendering.
    // willRenderCallback(initial) {
    // }

    // You may want to update staff after rendering
    // didRenderCallback(initial) {
    // }

  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _get(AXACookieDisclaimer.prototype.__proto__ || _Object$getPrototypeOf(AXACookieDisclaimer.prototype), 'disconnectedCallback', this).call(this);

      this.disclaimerHandler.destroy();
      delete this.disclaimerHandler;
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.disclaimerHandler.hasAccepted()) {
        this.disclaimerHandler.cleanupWcNode();
      } else {
        _get(AXACookieDisclaimer.prototype.__proto__ || _Object$getPrototypeOf(AXACookieDisclaimer.prototype), 'render', this).call(this);
      }
    }

    // Do you consume context?
    // contextCallback(contextNode) {
    //   contextNode is now available.
    // }

  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      this.disclaimerHandler.init();
    }
  }]);

  return AXACookieDisclaimer;
}(BaseComponentGlobal);

AXACookieDisclaimer.tagName = 'axa-cookie-disclaimer';


wcdomready(function () {
  window.customElements.define(AXACookieDisclaimer.tagName, AXACookieDisclaimer);
});

export default AXACookieDisclaimer;