import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterSocial extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const inline = getAttribute(this, 'inline');
    const light = getAttribute(this, 'light');

    this.className = classnames('m-footer-social', {
      'm-footer-social--inline': inline,
      'm-footer-social--light': light,
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-footer-social', FooterSocial);
}, false);
