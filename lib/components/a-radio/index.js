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

var AXARadio = function (_BaseComponentGlobal) {
  _inherits(AXARadio, _BaseComponentGlobal);

  _createClass(AXARadio, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['input-id', 'error', 'value', 'name', 'checked', 'disabled'];
    }
  }]);

  function AXARadio() {
    _classCallCheck(this, AXARadio);

    return _possibleConstructorReturn(this, (AXARadio.__proto__ || _Object$getPrototypeOf(AXARadio)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXARadio, [{
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

AXARadio.tagName = 'axa-radio';


wcdomready(function () {
  window.customElements.define(AXARadio.tagName, AXARadio);
});

export default AXARadio;