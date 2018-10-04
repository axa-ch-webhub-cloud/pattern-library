import PropTypes from 'prop-types';
import classnames from 'classnames';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';
import FooterLinks from './js/footer-links';

class AXAFooterLinks extends BaseComponentGlobal {
  static tagName = 'axa-footer-links'
  static propTypes = {
    cols: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      isActive: PropTypes.bool,
    })),
    title: PropTypes.string,
  }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
  }

  willRenderCallback() {
    const { cols } = this;

    this.className = classnames(this.initialClassName, 'm-footer-links', {
      'm-footer-links--cols': cols,
      [`m-footer-links--cols-${cols}`]: cols,
    });
  }

  didRenderCallback() {
    if (this.footerLinks) {
      this.footerLinks.destroy();
    }
    this.footerLinks = new FooterLinks(this);
  }

  disconnectedCallback() {
    if (this.footerLinks) {
      this.footerLinks.destroy();
      delete this.footerLinks;
    }
  }
}

defineOnce(AXAFooterLinks.tagName, AXAFooterLinks);

export default AXAFooterLinks;
