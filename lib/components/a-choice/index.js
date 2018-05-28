import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

var AXAChoice = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAChoice, _BaseComponentGlobal);
  babelHelpers.createClass(AXAChoice, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['input-id', 'error', 'value', 'name', 'checked', 'disabled'];
    }
  }]);

  function AXAChoice() {
    babelHelpers.classCallCheck(this, AXAChoice);
    return babelHelpers.possibleConstructorReturn(this, (AXAChoice.__proto__ || Object.getPrototypeOf(AXAChoice)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAChoice, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var error = this.error,
          checked = this.checked,
          disabled = this.disabled;


      this.className = classnames(this.initialClassName, 'a-choice', {
        'a-choice--error': error,
        'a-choice--checked': checked,
        'a-choice--disabled': disabled
      });
    }
  }]);
  return AXAChoice;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-choice', AXAChoice);
});

export default AXAChoice;