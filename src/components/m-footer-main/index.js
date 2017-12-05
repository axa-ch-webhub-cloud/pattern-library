import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterMain extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const light = getAttribute(this, 'light');

    this.className = classnames('m-footer-main', {
      'm-footer-main--light': light,
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-footer-main', FooterMain);
}, false);
