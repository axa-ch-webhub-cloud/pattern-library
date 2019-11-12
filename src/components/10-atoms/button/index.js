import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';
import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';
import buttonCSS from './index.scss';

const ARROW_RIGHT = 'arrow-right';

class AXAButton extends LitElement {
  static get tagName() {
    return 'axa-button';
  }

  static get styles() {
    return css`
      ${unsafeCSS(buttonCSS)}
    `;
  }

  static get properties() {
    return {
      // button, submit, reset
      type: { type: String, reflect: true, defaultValue: 'button' },
      // secondary, red,  inverted, inverted-blue-ocean, inverted-red-tosca, inverted-purple-logan, inverted-green-viridian, inverted-blue-teal
      variant: { type: String, defaultValue: '' },
      icon: { type: String, defaultValue: '' },
      size: { type: String, defaultValue: '' },
      className: { type: String, defaultValue: '' },
      slot: { type: String, defaultValue: '' },
      motionOff: { type: Boolean, defaultValue: false },
      disabled: { type: Boolean, reflect: true, defaultValue: false },
      onClick: { type: Function, defaultValue: () => {} },
    };
  }

  constructor() {
    super();
    debugger;
    applyDefaults(this);
  }

  get isTypeSubmitOrReset() {
    return this.type === 'submit' || this.type === 'reset';
  }

  get showIcon() {
    return this.icon && this.icon !== ARROW_RIGHT;
  }

  get showArrow() {
    return this.icon === ARROW_RIGHT;
  }

  firstUpdated() {
    const { style } = this;
    // shadow dom submit btn workaround
    if (this.isTypeSubmitOrReset) {
      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      this.appendChild(fakeButton);
      this.onclick = () => fakeButton.click();
    }

    style.appearance = 'none';
    style.mozAppearance = 'none';
    style.webkitAppearance = 'none';
    style.msAppearance = 'none';
    style.oAppearance = 'none';
  }

  render() {
    const {
      type,
      motionOff,
      disabled,
      variant = '',
      icon = '',
      size = '',
    } = this;

    const classes = {
      'a-button': true,
      'a-button--large': size === 'large',
      'a-button--small': size === 'small',
      'a-button--motion': !motionOff,
      'a-button--secondary': variant === 'secondary',
      'a-button--red': variant === 'red',
      'a-button--inverted': variant.includes('inverted'),
      'a-button--inverted-blue-ocean': variant === 'inverted-blue-ocean',
      'a-button--inverted-red-tosca': variant === 'inverted-red-tosca',
      'a-button--inverted-purple-logan': variant === 'inverted-purple-logan',
      'a-button--inverted-green-viridian':
        variant === 'inverted-green-viridian',
      'a-button--inverted-blue-teal': variant === 'inverted-blue-teal',
    };

    return html`
      <button
        type="${type}"
        class="${classMap(classes)}"
        ?disabled="${disabled}"
        @click="${this.onClick}"
      >
        <span class="a-button__flex-wrapper">
          ${this.showIcon
            ? html`
                <axa-icon class="a-button__icon" icon="${icon}"></axa-icon>
              `
            : ''}
          <slot></slot>
          ${this.showArrow
            ? html`
                <axa-icon class="a-button__arrow" icon="arrow-right"></axa-icon>
              `
            : ''}
        </span>
      </button>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.isTypeSubmitOrReset) this.onclick = null;
  }
}

defineOnce(AXAButton.tagName, AXAButton);

export default AXAButton;
