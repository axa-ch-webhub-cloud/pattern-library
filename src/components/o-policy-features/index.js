import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';
import classnames from "classnames";
import getAttribute from "../../js/get-attribute";

class AXAPolicyFeatures extends BaseComponentGlobal {
  static tagName = 'axa-policy-features'

  static get observedAttributes() { return ['axa-style', 'title']; }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    const axaStyle = getAttribute(this, 'axa-style');
    const STYLE_WHITELIST = ['default', 'dark-indigo', 'axa-blue', 'wild-sand', 'white'];
    let allowedStyle = 'default';
    if (STYLE_WHITELIST.indexOf(axaStyle) > -1) {
      allowedStyle = axaStyle;
    }
    this.className = classnames(this.initialClassName, 'o-policy-features', 'o-policy-features__style-' + allowedStyle);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

  }
}

defineOnce(AXAPolicyFeatures.tagName, AXAPolicyFeatures);

export default AXAPolicyFeatures;
