import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import FormGroup from './js/form-group';

import styles from './index.scss';
import template from './_template';

var AXAFormGroup = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAFormGroup, _BaseComponentGlobal);
  babelHelpers.createClass(AXAFormGroup, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['label', 'info', 'error'];
    }
  }]);

  function AXAFormGroup() {
    babelHelpers.classCallCheck(this, AXAFormGroup);
    return babelHelpers.possibleConstructorReturn(this, (AXAFormGroup.__proto__ || Object.getPrototypeOf(AXAFormGroup)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAFormGroup, [{
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
      babelHelpers.get(AXAFormGroup.prototype.__proto__ || Object.getPrototypeOf(AXAFormGroup.prototype), 'disconnectedCallback', this).call(this);

      this.interaction.destroy();
      delete this.interaction;
    }
  }]);
  return AXAFormGroup;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-form-group', AXAFormGroup);
});

export default AXAFormGroup;