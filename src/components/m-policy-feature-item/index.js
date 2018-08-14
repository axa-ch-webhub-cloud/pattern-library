import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAPolicyFeatureItem extends BaseComponentGlobal {
  static tagName = 'axa-policy-feature-item'

  static get observedAttributes() {
    return ['classes', 'src', 'title', 'description'];
  }

  constructor() {
    super({
      styles, template,
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-policy-feature-item`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXAPolicyFeatureItem.tagName, AXAPolicyFeatureItem);

export default AXAPolicyFeatureItem;
