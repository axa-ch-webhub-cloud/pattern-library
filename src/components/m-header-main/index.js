import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMain extends BaseComponentGlobal {
  static tagName = 'axa-header-main'

  static get observedAttributes() { return ['first-left']; }

  constructor() {
    super(styles, template);

    this.enableContext();
  }

  willRenderCallback() {
    const { firstLeft } = this;

    this.className = classnames(this.initialClassName, 'm-header-main', {
      'm-header-main--first-left': firstLeft,
    });
  }
}

wcdomready(() => {
  window.customElements.define(AXAHeaderMain.tagName, AXAHeaderMain);
});

export default AXAHeaderMain;
