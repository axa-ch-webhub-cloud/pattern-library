import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAPolicyFeatures extends BaseComponentGlobal {
  static tagName = 'axa-policy-features'

  static get observedAttributes() { return ['axa-style', 'title']; }

  constructor() {
    super({
      styles, template,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = classnames(this.initialClassName, 'o-policy-features');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXAPolicyFeatures.tagName, AXAPolicyFeatures);

export default AXAPolicyFeatures;
