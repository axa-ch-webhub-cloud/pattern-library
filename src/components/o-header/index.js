import classnames from 'classnames';
import styles from './index.scss';
import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class Header extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.enableContext();
    console.log('constructor -> enabled context for  header');
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-header`;
  }
}

domready(() => {
  window.customElements.define('axa-header', Header);
});
