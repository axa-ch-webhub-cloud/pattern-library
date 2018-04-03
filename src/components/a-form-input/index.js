import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

import styles from './index.scss';
import template from './_template';

class AXAFormInput extends BaseComponentGlobal {
  static get observedAttributes() {
    return ['valid', 'inline', 'error', 'disabled', 'input-id', 'type', 'placeholder', 'value', 'name'];
  }

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    const { valid, inline, error, disabled } = this;

    const inputClasses = classnames('a-form-input', this.initialClassName, {
      'a-form-input--valid': valid,
      'a-form-input--inline': inline,
      'a-form-input--error': error,
      'a-form-input--disabled': disabled,
    });

    this.className = inputClasses;
  }
}

wcdomready(() => {
  window.customElements.define('axa-form-input', AXAFormInput);
});

export default AXAFormInput;
