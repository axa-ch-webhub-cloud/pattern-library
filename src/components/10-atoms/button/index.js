import { html, css, unsafeCSS, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import AXAIcon from '@axa-ch/icon';

import applyDefaults from '../../../utils/apply-defaults';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import buttonCSS from './index.scss';

const ARROW_RIGHT = 'arrow-right';

const hasShadowDom = el => !!el.shadowRoot && !!el.attachShadow;

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
      href: { type: String },
      external: { type: Boolean },
      onClick: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
    defineVersioned([AXAIcon], __VERSION_INFO__, this);
    this.handleClick = this.handleClick.bind(this);
  }

  get showIcon() {
    return this.icon && this.icon !== ARROW_RIGHT;
  }

  get showArrow() {
    return this.icon === ARROW_RIGHT;
  }

  handleClick(ev) {
    if (this.type !== 'button' && hasShadowDom(this)) {
      // this button wants to specifically submit a form
      // climb up the dom to see if we're in a <form>
      // and if so, then use JS to submit it
      const form = this.closest('form');
      if (form) {
        ev.preventDefault();

        const fakeButton = document.createElement('button');
        fakeButton.type = this.type;
        fakeButton.style.display = 'none';
        form.appendChild(fakeButton);
        fakeButton.click();
        fakeButton.remove();
      }
    }

    this.onClick(ev);
  }

  render() {
    const {
      type,
      motionOff,
      disabled,
      variant = '',
      icon = '',
      size = '',
      href,
      external,
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

    const renderContent = () => html`<span class="a-button__flex-wrapper">
      ${this.showIcon
        ? versionedHtml(
            this
          )`<axa-icon class="a-button__icon" icon="${icon}"></axa-icon> `
        : ''}
      <slot></slot>
      ${this.showArrow
        ? versionedHtml(
            this
          )`<axa-icon class="a-button__arrow" icon="arrow-right"></axa-icon>`
        : html``}
    </span>`;

    if (this.href) {
      return html`<a
        class="${classMap(classes)}"
        href="${href}"
        target="${external ? '_blank' : '_top'}"
        rel="${external ? 'noreferrer noopener' : ''}"
        aria-disabled="${disabled}"
        @click="${this.onClick}"
        >${renderContent()}</a
      >`;
    }

    return html`
      <button
        type="${type}"
        class="${classMap(classes)}"
        ?disabled="${disabled}"
        @click="${this.handleClick}"
      >
        ${renderContent()}
      </button>
    `;
  }
}

defineVersioned([AXAButton], __VERSION_INFO__);

export default AXAButton;
