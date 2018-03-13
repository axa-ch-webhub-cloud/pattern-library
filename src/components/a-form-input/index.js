import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';
import getAttributes from '../../js/get-attributes';

class AXAFormInput extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    const { valid, inline, error, disabled } = getAttributes(this);

    const inputClasses = classnames('a-form-input', this.initialClassName, {
      'a-form-input--valid': valid,
      'a-form-input--inline': inline,
      'a-form-input--error': error,
      'a-form-input--disabled': disabled,
    });

    this.className = inputClasses;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }
}

wcdomready(() => {
  window.customElements.define('axa-form-input', AXAFormInput);
});

export default AXAFormInput;
