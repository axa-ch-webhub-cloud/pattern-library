import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import getAttribute from '../../js/get-attribute';
import styles from './index.scss';
import template from './_template';

class FooterLinks extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const cols = getAttribute(this, 'cols');

    this.className = classnames('m-footer-links', {
      'm-footer-links--cols': cols,
      [`m-footer-links--cols-${cols}`]: cols,
    });
  }
}

window.customElements.define('axa-footer-links', FooterLinks);
