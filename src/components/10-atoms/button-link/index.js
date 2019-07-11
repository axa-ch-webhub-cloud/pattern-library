import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';
import defineOnce from '../../../utils/define-once';
import buttonLinkCSS from './index.scss';

const ARROW_RIGHT = 'arrow-right';

class AXAButtonLink extends LitElement {
  static get tagName() {
    return 'axa-button-link';
  }

  static get styles() {
    return css`
      ${unsafeCSS(buttonLinkCSS)}
    `;
  }

  static get properties() {
    return {
      href: { type: String },
      external: { type: Boolean },
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
    this.href = '';
    this.size = '';
    this.variant = '';
    this.icon = '';
    this.external = false;
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

  get showIcon() {
    return this.icon && this.icon !== ARROW_RIGHT;
  }

  get showArrow() {
    return this.icon === ARROW_RIGHT;
  }

  render() {
    const {
      href,
      external,
      size = '',
      motionOff,
      disabled,
      variant = '',
      icon = '',
    } = this;

    const classes = {
      'a-button-link': true,
      'a-button-link--large': size === 'large',
      'a-button-link--small': size === 'small',
      'a-button-link--motion': !motionOff,
      'a-button-link--secondary': variant === 'secondary',
      'a-button-link--red': variant === 'red',
      'a-button-link--inverted': variant.includes('inverted'),
      'a-button-link--inverted-blue-ocean': variant === 'inverted-blue-ocean',
      'a-button-link--inverted-red-tosca': variant === 'inverted-red-tosca',
      'a-button-link--inverted-purple-logan':
        variant === 'inverted-purple-logan',
      'a-button-link--inverted-green-viridian':
        variant === 'inverted-green-viridian',
      'a-button-link--inverted-blue-teal': variant === 'inverted-blue-teal',
    };

    return html`
      <a
        class="${classMap(classes)}"
        href="${href}"
        target="${external ? '_blank' : '_top'}"
        rel="${external ? 'noreferrer noopener' : ''}"
        aria-disabled="${disabled}"
        @click="${this.onClick}"
      >
        <span class="a-button-link__flex-wrapper">
          ${this.showIcon
            ? html`
                <axa-icon class="a-button-link__icon" icon="${icon}"></axa-icon>
              `
            : ''}
          <slot></slot>
          ${this.showArrow
            ? html`
                <axa-icon
                  class="a-button-link__arrow"
                  icon="arrow-right"
                ></axa-icon>
              `
            : ''}
        </span>
      </a>
    `;
  }
}

defineOnce(AXAButtonLink.tagName, AXAButtonLink);

export default AXAButtonLink;
