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

var AXAChoice = function (_BaseComponentGlobal) {
  _inherits(AXAChoice, _BaseComponentGlobal);

  _createClass(AXAChoice, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['input-id', 'error', 'value', 'name', 'checked', 'disabled'];
    }
  }]);

  function AXAChoice() {
    _classCallCheck(this, AXAChoice);

    return _possibleConstructorReturn(this, (AXAChoice.__proto__ || _Object$getPrototypeOf(AXAChoice)).call(this, styles, template));
  }

  _createClass(AXAChoice, [{
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

AXAChoice.tagName = 'axa-choice';


wcdomready(function () {
  window.customElements.define(AXAChoice.tagName, AXAChoice);
});

export default AXAChoice;