import { css, unsafeCSS } from 'lit-element';
import NoShadowDOM from '../../../utils/no-shadow';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAText extends NoShadowDOM {
  static get tagName() {
    return 'axa-text';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      variant: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }
}

defineOnce(AXAText.tagName, AXAText);

export default AXAText;
