import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import { BaseComponentGlobal } from '../_abstract/component-types';
import styles from './index.scss';
import template from './_template';

class FooterLanguages extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const inline = getAttribute(this, 'inline');

    this.className = classnames('m-footer-languages', {
      'm-footer-languages--inline': inline,
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-footer-languages', FooterLanguages);
}, false);
