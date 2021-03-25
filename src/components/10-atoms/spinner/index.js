import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXASpinner extends LitElement {
  static get tagName() {
    return 'axa-spinner';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      size: { type: String, defaultValue: 'default' },
      color: { type: String, defaultValue: 'inverted-blue-ocean' },
    };
  }

  firstUpdated() {}

  render() {
    const { size = '', color = '' } = this;
    const classes = {
      'a-spinner--default': size === 'default',
      'a-spinner--small': size === 'small',
      'a-spinner--inverted-blue-ocean': color === 'inverted-blue-ocean',
      'a-spinner--inverted-black': color === 'inverted-black',
    };

    return html`
      <article class="a-spinner">
        <div class="a-spinner-container">
          <span class="${classMap(classes)} __dot-1"></span>
          <span class="${classMap(classes)} __dot-2"></span>
          <span class="${classMap(classes)} __dot-3"></span>
        </div>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

/* eslint-disable no-undef */
defineVersioned([AXASpinner], __VERSION_INFO__);

export default AXASpinner;
