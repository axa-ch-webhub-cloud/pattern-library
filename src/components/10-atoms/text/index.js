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
      variant: { type: String },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const { variant } = this;

    const classes = {
      'a-text': true,
      'a-text--size-2': variant.indexOf('size-2') > -1,
      'a-text--size-3': variant.indexOf('size-3') > -1,
      'a-text--bold': variant.indexOf('bold') > -1,
    };

    Object.keys(classes).forEach(
      _class => classes[_class] && this.classList.add(_class)
    );
  }
}

defineOnce(AXAText.tagName, AXAText);

export default AXAText;
