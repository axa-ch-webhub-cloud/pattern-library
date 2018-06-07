import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';

import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';

import styles from './index.scss';
import template from './_template';

var AXACheckbox = function (_BaseComponentGlobal) {
  _inherits(AXACheckbox, _BaseComponentGlobal);

  _createClass(AXACheckbox, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['input-id', 'error', 'value', 'name', 'checked', 'disabled'];
    }
  }]);

  function AXACheckbox() {
    _classCallCheck(this, AXACheckbox);

    return _possibleConstructorReturn(this, (AXACheckbox.__proto__ || _Object$getPrototypeOf(AXACheckbox)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXACheckbox, [{
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

AXACheckbox.tagName = 'axa-checkbox';


wcdomready(function () {
  window.customElements.define(AXACheckbox.tagName, AXACheckbox);
});

export default AXACheckbox;