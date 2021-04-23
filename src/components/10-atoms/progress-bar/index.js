import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import { classMap } from 'lit-html/directives/class-map';
import styles from './index.scss';

class AXAProgressBar extends LitElement {
  static get tagName() {
    return 'axa-progress-bar';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      small: { type: Boolean, defaultValue: false },
      progressValue: { type: String, defaultValue: '32' },
      progressMaxValue: { type: String, defaultValue: '100' },
      progressLabelText: { type: String, defaultValue: '' },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const classes = {
      'a-progress-bar--small': this.small,
    };

    return html`
      <article class="a-progress-bar ${classMap(classes)}">
        <progress
          value="${this.progressValue}"
          max="${this.progressMaxValue}"
        ></progress>
        <label>
          ${this.progressLabelText}
        </label>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineVersioned([AXAProgressBar], __VERSION_INFO__);

export default AXAProgressBar;
