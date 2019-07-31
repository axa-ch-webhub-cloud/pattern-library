import NoShadowDOM from '../../../utils/no-shadow';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXAFieldset extends NoShadowDOM {
  static get tagName() {
    return 'axa-fieldset';
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      horizontal: { type: Boolean, reflect: true },
      error: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.horizontal = false;
    this.error = '';
  }
}

defineOnce(AXAFieldset.tagName, AXAFieldset);

export default AXAFieldset;
