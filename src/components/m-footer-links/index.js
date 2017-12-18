import classnames from 'classnames';
import { BaseComponentGlobal } from '../_abstract/component-types';
import getAttribute from '../../js/get-attribute';
import styles from './index.scss';
import template from './_template';
import { wcdomready } from '../../js/wcdomready';
import FooterLinks from './js/footer-links';

class AXAFooterLinks extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();
    const cols = getAttribute(this, 'cols');

    this.className = classnames(this.initialClassName, 'm-footer-links', {
      'm-footer-links--cols': cols,
      [`m-footer-links--cols-${cols}`]: cols,
    });

    this.footerLinks = new FooterLinks(this);
  }

  disconnectedCallback() {
    if (this.footerLinks) {
      this.footerLinks.destroy();
      delete this.footerLinks;
    }
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer-links', AXAFooterLinks);
});
