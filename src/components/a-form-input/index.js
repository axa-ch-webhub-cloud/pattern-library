import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAFormInput extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

wcdomready(() => {
  window.customElements.define('axa-form-input', AXAFormInput);
});

export default AXAFormInput;
