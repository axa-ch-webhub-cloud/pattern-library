import { css, html, LitElement, unsafeCSS } from 'lit-element';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAStepper extends LitElement {
  static get tagName() {
    return 'axa-stepper';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    return html``;
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAStepper], __VERSION_INFO__);
export default AXAStepper;
