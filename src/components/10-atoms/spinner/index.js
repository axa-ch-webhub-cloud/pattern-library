import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { defineVersioned } from '../../../utils/component-versioning';
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
      size: { type: Boolean, defaultValue: false },
      color: { type: String, defaultValue: 'inverted-blue-ocean' },
    };
  }

  render() {
    const { size = '', color = '' } = this;
    const classes = {
      'a-spinner--small': size,
      'a-spinner__dot--inverted-dark-grey': color === 'inverted-dark-grey',
      'a-spinner__dot--inverted-white': color === 'inverted-white',
    };

    return html`
      <article class="a-spinner">
        <div class="a-spinner-container">
          <span
            class="a-spinner__dot a-spinner__dot-1 ${classMap(classes)}"
          ></span>
          <span
            class="a-spinner__dot a-spinner__dot-2 ${classMap(classes)}"
          ></span>
          <span
            class="a-spinner__dot a-spinner__dot-3 ${classMap(classes)}"
          ></span>
        </div>
      </article>
    `;
  }
}

/* eslint-disable no-undef */
defineVersioned([AXASpinner], __VERSION_INFO__);

export default AXASpinner;
