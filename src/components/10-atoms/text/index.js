import { css, unsafeCSS } from 'lit-element';
import NoShadowDOM from '../../../utils/no-shadow';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
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
    this.variant = '';
  }

  render() {
    // eslint-disable-next-line prefer-destructuring
    const variant = this.variant;
    const isSize2 = variant.includes('size-2');
    const isSize3 = variant.includes('size-3');
    const isBold = variant.includes('bold');

    const classes = ['a-text'];
    if (isSize2) {
      classes.push('a-text--size-2');
    }
    if (isSize3) {
      classes.push('a-text--size-3');
    }
    if (isBold) {
      classes.push('a-text--bold');
    }

    const { firstChild, firstElementChild } = this;

    if (firstChild.nodeType === 3 && firstElementChild === null) {
      const p = document.createElement('p');
      p.innerHTML = firstChild.textContent;
      p.className = classes.join(' ');
      this.innerHTML = '';
      this.appendChild(p);
    } else {
      classes.forEach(_class => firstElementChild.classList.add(_class));
    }
  }
}

defineOnce(AXAText.tagName, AXAText);

export default AXAText;
