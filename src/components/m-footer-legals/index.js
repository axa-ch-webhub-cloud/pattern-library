import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import BaseComponentGlobal from '../../js/base-component-global';
import styles from './index.scss';
import wcdomready from '../../js/wcdomready';

class AXAFooterLegals extends BaseComponentGlobal {
  constructor() {
    super(styles);
  }

  connectedCallback() {
    super.connectedCallback();
    const bottom = getAttribute(this, 'bottom');

    this.className = classnames(this.initialClassName, 'm-footer-legals', {
      'm-footer-legals--bottom': bottom,
    });
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer-legals', AXAFooterLegals);
});

export default AXAFooterLegals;
