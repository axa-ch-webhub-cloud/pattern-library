import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

var AXAInput = function (_BaseComponentGlobal) {
  _inherits(AXAInput, _BaseComponentGlobal);

  _createClass(AXAInput, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['valid', 'inline', 'error', 'disabled', 'input-id', 'type', 'placeholder', 'value', 'name'];
    }
  }]);

  function AXAInput() {
    _classCallCheck(this, AXAInput);

    return _possibleConstructorReturn(this, (AXAInput.__proto__ || _Object$getPrototypeOf(AXAInput)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAInput, [{
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

AXAInput.tagName = 'axa-input';


wcdomready(function () {
  window.customElements.define(AXAInput.tagName, AXAInput);
});

export default AXAInput;