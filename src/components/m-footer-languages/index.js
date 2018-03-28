import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAFooterLanguages extends BaseComponentGlobal {
  static get observedAttributes() { return ['inline', 'items', 'short', 'title']; }

  constructor() {
    super(styles, template);
  }

  willRenderCallback() {
    const { inline } = this;

    this.className = classnames(this.initialClassName, 'm-footer-languages', {
      'm-footer-languages--inline': inline,
    });
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer-languages', AXAFooterLanguages);
});

export default AXAFooterLanguages;
