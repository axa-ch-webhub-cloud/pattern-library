import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';

class Button extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
}

window.customElements.define('axa-button', Button);

document.createElement('axa-button');
