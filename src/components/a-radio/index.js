import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';
import getAttributes from '../../js/get-attributes';

class AXARadio extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    const { error, checked, disabled } = getAttributes(this);

    const radioClasses = classnames(this.initialClassName, 'a-radio', {
      'a-radio--error': error,
      'a-radio--checked': checked,
      'a-radio--disabled': disabled,
    });

    this.className = radioClasses;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }
}

wcdomready(() => {
  window.customElements.define('axa-radio', AXARadio);
});

export default AXARadio;
