import NoShadowDOM from '../../../utils/no-shadow.js';

import { defineVersioned } from '../../../utils/component-versioning.js';
import applyDefaults from '../../../utils/apply-defaults.js';
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
      horizontal: { type: String, reflect: true, defaultValue: undefined },
      error: { type: String, reflect: true },
      slot: { type: String },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }
}

defineVersioned([AXAFieldset], __VERSION_INFO__);

export default AXAFieldset;
