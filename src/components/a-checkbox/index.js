import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';
import getAttributes from '../../js/get-attributes';

class AXACheckbox extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    const { error, checked, disabled } = getAttributes(this);

    const checkboxClasses = classnames(this.initialClassName, 'a-checkbox', {
      'a-checkbox--error': error,
      'a-checkbox--checked': checked,
      'a-checkbox--disabled': disabled,
    });

    this.className = checkboxClasses;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }
}

wcdomready(() => {
  window.customElements.define('axa-checkbox', AXACheckbox);
});

export default AXACheckbox;
