import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import FormGroup from './js/form-group';

import styles from './index.scss';
import template from './_template';

var AXAFormGroup = function (_BaseComponentGlobal) {
  _inherits(AXAFormGroup, _BaseComponentGlobal);

  _createClass(AXAFormGroup, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['label', 'info', 'error'];
    }
  }]);

  function AXAFormGroup() {
    _classCallCheck(this, AXAFormGroup);

    return _possibleConstructorReturn(this, (AXAFormGroup.__proto__ || _Object$getPrototypeOf(AXAFormGroup)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAFormGroup, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var info = this.info,
          error = this.error;


      this.className = classnames(this.initialClassName, 'm-form-group', {
        'm-form-group--info': info,
        'm-form-group--error': error
      });
    }
  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      if (this.interaction) {
        this.interaction.destroy();
      }

      this.interaction = new FormGroup(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _get(AXAFormGroup.prototype.__proto__ || _Object$getPrototypeOf(AXAFormGroup.prototype), 'disconnectedCallback', this).call(this);

      this.interaction.destroy();
      delete this.interaction;
    }
  }]);

  return AXAFormGroup;
}(BaseComponentGlobal);

AXAFormGroup.tagName = 'axa-form-group';


wcdomready(function () {
  window.customElements.define(AXAFormGroup.tagName, AXAFormGroup);
});

export default AXAFormGroup;