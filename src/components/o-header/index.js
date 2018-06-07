import styles from './index.scss';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

class AXAHeader extends BaseComponentGlobal {
  static tagName = 'axa-header'

  constructor() {
    super({ styles });

    this.provideContext();
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-header`;
  }
}

wcdomready(() => {
  window.customElements.define(AXAHeader.tagName, AXAHeader);
});

export default AXAHeader;
