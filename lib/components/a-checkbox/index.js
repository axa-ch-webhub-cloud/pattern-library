import classnames from 'classnames';

import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';

import styles from './index.scss';
import template from './_template';

var AXACheckbox = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXACheckbox, _BaseComponentGlobal);
  babelHelpers.createClass(AXACheckbox, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['input-id', 'error', 'value', 'name', 'checked', 'disabled'];
    }
  }]);

  function AXACheckbox() {
    babelHelpers.classCallCheck(this, AXACheckbox);
    return babelHelpers.possibleConstructorReturn(this, (AXACheckbox.__proto__ || Object.getPrototypeOf(AXACheckbox)).call(this, styles, template));
  }

  babelHelpers.createClass(AXACheckbox, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var error = this.error,
          checked = this.checked,
          disabled = this.disabled;


      this.className = classnames(this.initialClassName, 'a-checkbox', {
        'a-checkbox--error': error,
        'a-checkbox--checked': checked,
        'a-checkbox--disabled': disabled
      });
    }
  }]);
  return AXACheckbox;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-checkbox', AXACheckbox);
});

export default AXACheckbox;