import styles from './index.scss';
import { BaseComponentShadow } from '../_abstract/component-types';

class CoreDummy extends BaseComponentShadow {
  constructor() {
    super(styles);
  }
  connectedCallback() {
    super.connectedCallback();
  }
}

window.customElements.define('hello-world', CoreDummy);
