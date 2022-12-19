import { LitElement, html, css, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning.js';
import applyDefaults from '../../../utils/apply-defaults.js';
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

  constructor() {
    super();
    applyDefaults(this);
  }

  static get properties() {
    return {
      small: { type: Boolean, defaultValue: false },
      color: { type: String },
    };
  }

  render() {
    const classes = {
      'a-spinner--small': this.small,
      'a-spinner__dot--inverted-dark-grey': this.color === 'inverted-dark-grey',
      'a-spinner__dot--inverted-white': this.color === 'inverted-white',
    };

    return html`
      <article class="a-spinner">
        <div class="a-spinner__container">
          <span
            class="a-spinner__dot a-spinner__dot--1 ${classMap(classes)}"
          ></span>
          <span
            class="a-spinner__dot a-spinner__dot--2 ${classMap(classes)}"
          ></span>
          <span
            class="a-spinner__dot a-spinner__dot--3 ${classMap(classes)}"
          ></span>
        </div>
      </article>
    `;
  }
}

defineVersioned([AXASpinner], __VERSION_INFO__);

export default AXASpinner;
