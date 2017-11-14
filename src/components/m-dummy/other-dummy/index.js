import styles from './index.scss';
import { BaseComponentShadow } from '../../_abstract/component-types';

class CoreSaa extends BaseComponentShadow {
  constructor() {
    super(styles);
  }
}

window.customElements.define('other-dummy', CoreSaa);
