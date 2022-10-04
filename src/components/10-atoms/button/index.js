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
      block: { type: Boolean, reflect: true },
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

  get isTypeSubmitOrReset() {
    return this.type === 'submit' || this.type === 'reset';
  }

  get showIcon() {
    return this.icon && this.icon !== ARROW_RIGHT;
  }

  get showArrow() {
    return this.icon === ARROW_RIGHT;
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
          this._observer = new MutationObserver(() => this.attachFakeButton());
        }
        this._observer.observe(this, {
          childList: true,
        });
        break;
      default:
        break;
    }
  }

  attachFakeButton() {
    const fakeButton = document.createElement('button');
    fakeButton.type = this.type;
    fakeButton.style.display = 'none';
    this.watch('stop');
    this.appendChild(fakeButton);
    this.watch('start');
    this.fakeButton = fakeButton;
  }

  firstUpdated() {
    // shadow dom submit btn workaround
    // only use fakeButton when shadowDom is natively supported
    if (this.isTypeSubmitOrReset) {
      this.attachFakeButton();
    }

    if (typeof this.onclick === 'function') {
      // cache original event so that we can fire it when internal button is pressed
      // We are going to override original event so that someone can manually trigger
      // onclick via function call
      this.originalOnclick = this.onclick;
    }

    // If someone fires a click on the button and its type is submit then trigger fake button
    // press
    this.onclick = e => {
      // call handle click and pass flag to be sure that handle click does not call
      // us back.
      this.handleClick(e, true);
    };
  }

  handleClick(e, eventIsManuallyFunctionTriggered = false) {
    // block propagation if event is not synthetic. We need only that
    // the event coming from fake button is fired so that default
    // form behaviour works (submit, reset, etc). The reason why it works with fake button is
    // that fake button is NOT inside a ShadowDOM. The event instead
    // bubbles out of ShadowDOM, hence the stop propagation trick

    if (e.isTrusted && this.isTypeSubmitOrReset) {
      e.stopPropagation();
      this.fakeButton.click();
    }

    // If we are under react, onClick will be camel Case onClick. If so, use it
    // otherwise if a consumer defined a onclick="fn", call that instead
    const onclick = this.onClick || this.originalOnclick;

    // if click event is fired manually via javascript, the this.onclick = e => { function
    // will be called and therefore make sure to not trigger it again.
    if (!eventIsManuallyFunctionTriggered && typeof onclick === 'function') {
      onclick(e);
    }
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

  disconnectedCallback() {
    super.disconnectedCallback();
    // remove installed observer, if any
    this.watch('stop');
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAButton], __VERSION_INFO__);

export default AXAButton;
