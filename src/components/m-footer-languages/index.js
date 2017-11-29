import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterLanguages extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const inline = this.hasAttribute('inline') && this.getAttribute('inline') !== 'false';

    this.className = classnames('m-footer-languages', {
      'm-footer-languages--inline': inline,
    });
  }
}

window.customElements.define('axa-footer-languages', FooterLanguages);
