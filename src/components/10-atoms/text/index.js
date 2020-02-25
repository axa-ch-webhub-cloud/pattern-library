/* global Text */
import { css, unsafeCSS } from 'lit-element';
import NoShadowDOM from '../../../utils/no-shadow';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

// N.B. This custom element is 'open' (no ShadowDOM) so that screen readers can discover
// p(aragraph) tags inside
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

  watch(mode) {
    switch (mode) {
      case 'stop':
        if (this._observer) {
          this._observer.disconnect();
        }
        break;
      case 'start':
        if (!this._observer) {
          this._observer = new MutationObserver(() => this.render());
        }
        this._observer.observe(this, {
          childList: true,
        });
        break;
      default:
        break;
    }
  }

  render() {
    // do we have 'pure', non-empty text, e.g. <axa-text>Hello, World</axa-text>?
    const nonWhitespaceTextNodes = [...this.childNodes].filter(
      node => node instanceof Text && node.textContent.trim()
    );
    if (nonWhitespaceTextNodes.length) {
      // yes, wrap it in 1 <p> node to keep screenreaders happy (they offer
      // paragraph-to-paragraph-jumping keyboard shortcuts that work by detecting <p>s):
      const paragraph = document.createElement('p');
      paragraph.textContent = this.textContent;
      // pause child-update watcher
      this.watch('stop');
      // delete the children, now that their content has been harvested
      this.innerHTML = '';
      // add the <p> node
      this.appendChild(paragraph);
      // restart child-update watcher
      this.watch('start');
    }
  }

  disconnectedCallback() {
    // remove installed observer
    this.watch('stop');
  }
}

defineOnce(AXAText.tagName, AXAText);

export default AXAText;
