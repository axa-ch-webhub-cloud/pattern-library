import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';

import { applyDefaults } from '../../../utils/with-react';
import defineOnce from '../../../utils/define-once';
import buttonCSS from './index.scss';

const ARROW_RIGHT = 'arrow-right';

// @TODO: REMOVE ONCE IE11 is deprecated!!!!
// equivalent to event.isTrusted. Unfortunately, IE11 does not support it
const eventIsNotTrusted = e =>
  !(!e.screenX && !e.screenY && !e.clientX && !e.clientY);

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
      variant: { type: String },
      icon: { type: String },
      size: { type: String },
      motionOff: { type: Boolean },
      disabled: { type: Boolean, reflect: true },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
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

    // eslint-disable-next-line no-undef
    const isNativeShadowDOM = ShadowRoot.toString().indexOf('native code') > -1;

    // shadow dom submit btn workaround
    // only use fakeButton when shadowDom is natively supported
    if (isNativeShadowDOM && this.isTypeSubmitOrReset) {
      const fakeButton = document.createElement('button');
      fakeButton.type = this.type;
      fakeButton.style.display = 'none';
      this.appendChild(fakeButton);

      // this click method is triggered due to bubbeling from the button inside
      // shadowRoot. Do not be confused with onClick
      this.onclick = e => {
        // block propagation if event is not synthetic. We need only that
        // the event coming from fake button is fired so that default
        // form behaviour works (submit, reset, etc). The reason why it works with fake button is
        // that fake button is NOT inside a shadow dom. The event instead
        // bubbles out of shadow dom, hence the stop propagation trick
        if (eventIsNotTrusted(e)) {
          e.stopPropagation();
          fakeButton.click();
        }
      };
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

    if (this.isTypeSubmitOrReset) {
      this.onclick = null;
    }
  }
}

defineOnce(AXAButton.tagName, AXAButton);

export default AXAButton;
