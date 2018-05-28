import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

var AXAInput = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAInput, _BaseComponentGlobal);
  babelHelpers.createClass(AXAInput, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['valid', 'inline', 'error', 'disabled', 'input-id', 'type', 'placeholder', 'value', 'name'];
    }
  }]);

  function AXAInput() {
    babelHelpers.classCallCheck(this, AXAInput);
    return babelHelpers.possibleConstructorReturn(this, (AXAInput.__proto__ || Object.getPrototypeOf(AXAInput)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAInput, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var valid = this.valid,
          inline = this.inline,
          error = this.error,
          disabled = this.disabled;


      this.className = classnames('a-input', this.initialClassName, {
        'a-input--valid': valid,
        'a-input--inline': inline,
        'a-input--error': error,
        'a-input--disabled': disabled
      });
    }
  }]);
  return AXAInput;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-input', AXAInput);
});

export default AXAInput;