import classnames from 'classnames';
import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class AXAHeader extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.enableContext();
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-header`;
  }
}

domready(() => {
  window.customElements.define('axa-header', AXAHeader);
});
