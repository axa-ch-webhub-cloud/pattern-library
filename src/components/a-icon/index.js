import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';

class Icon extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }
}

window.customElements.define('axa-icon', Icon);
