import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';
import styles from './index.scss';

class Sticky extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = 'o-sticky';
  }
}

domready(() => {
  window.customElements.define('axa-sticky', Sticky);
});
