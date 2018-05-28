import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

var AXARadio = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXARadio, _BaseComponentGlobal);
  babelHelpers.createClass(AXARadio, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['input-id', 'error', 'value', 'name', 'checked', 'disabled'];
    }
  }]);

  function AXARadio() {
    babelHelpers.classCallCheck(this, AXARadio);
    return babelHelpers.possibleConstructorReturn(this, (AXARadio.__proto__ || Object.getPrototypeOf(AXARadio)).call(this, styles, template));
  }

  babelHelpers.createClass(AXARadio, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var error = this.error,
          checked = this.checked,
          disabled = this.disabled;


      this.className = classnames(this.initialClassName, 'a-radio', {
        'a-radio--error': error,
        'a-radio--checked': checked,
        'a-radio--disabled': disabled
      });
    }
  }]);
  return AXARadio;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-radio', AXARadio);
});

export default AXARadio;