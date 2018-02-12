import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXACheckbox extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

wcdomready(() => {
  window.customElements.define('axa-checkbox', AXACheckbox);
});

export default AXACheckbox;
