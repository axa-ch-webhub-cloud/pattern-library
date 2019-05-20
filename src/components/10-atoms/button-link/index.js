import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';
import defineOnce from '../../../utils/define-once';
import buttonCSS from './index.scss';

class AXAButtonLink extends LitElement {
  static get tagName() {
    return 'axa-button-link';
  }

  static get styles() {
    return css`
      ${unsafeCSS(buttonCSS)}
    `;
  }

  static get properties() {
    return {
      href: { type: String },
      external: { type: Boolean },
      // secondary, red,  inverted, inverted-green, inverted-dark-blue
      variant: { type: String },
      icon: { type: String },
      large: { type: Boolean },
      motionOff: { type: Boolean },
      disabled: { type: Boolean, reflect: true },
      onClick: { type: Function },
    };
  }

  constructor() {
    super();
    this.href = '';
    this.variant = '';
    this.icon = '';
    this.external = false;
    this.large = false;
    this.motionOff = false;
    this.disabled = false;
    this.onClick = () => {};
  }

  firstUpdated() {
    const { style } = this;
    style.appearance = 'none';
    style.mozAppearance = 'none';
    style.webkitAppearance = 'none';
    style.msAppearance = 'none';
    style.oAppearance = 'none';
  }

  render() {
    const {
      href,
      external,
      large,
      motionOff,
      disabled,
      variant = '',
      icon = '',
    } = this;

    const classes = {
      'a-button-link--secondary': variant === 'secondary',
      'a-button-link--red': variant === 'red',
      'a-button-link--inverted': variant === 'inverted',
      'a-button-link--large': large,
      'a-button-link--motion': !motionOff,
    };

    return html`
      <a
        class="a-button-link ${classMap(classes)}"
        href="${href}"
        target="${external ? '_blank' : '_top'}"
        rel="${external ? 'noreferrer noopener' : ''}"
        aria-disabled="${disabled}"
        @click="${this.onClick}"
      >
        <div class="a-button-link__flex-wrapper">
          <slot></slot> ${icon &&
            html`
              <axa-icon class="a-button-link__icon" icon="${icon}"></axa-icon>
            `}
        </div>
      </a>
    `;
  }
}

defineOnce(AXAButtonLink.tagName, AXAButtonLink);

export default AXAButtonLink;
