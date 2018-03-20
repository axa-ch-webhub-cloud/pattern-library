import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import getAttribute from '../../js/get-attribute';

class AXAHeaderMain extends BaseComponentGlobal {
  static get observedAttributes() { return ['first-left']; }

  constructor() {
    super(styles, template);

    this.enableContext();
  }

  connectedCallback() {
    super.connectedCallback();

    this.renderWCNode();
  }

  attributeChangedCallback() {
    this.renderWCNode();
  }

  renderWCNode() {
    const firstLeft = getAttribute('first-left');

    this.className = classnames(this.initialClassName, 'm-header-main', {
      'm-header-main--first-left': firstLeft,
    });
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-main', AXAHeaderMain);
});

export default AXAHeaderMain;
