import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAIcon extends BaseComponentGlobal {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() { return ['icon']; }

  constructor() {
    super(styles, template);
  }

  get icon() {
    return this._icon;
  }

  set icon(icon) {
    this._icon = icon;
  }
}

wcdomready(() => {
  window.customElements.define('axa-icon', AXAIcon);
});

export default AXAIcon;
