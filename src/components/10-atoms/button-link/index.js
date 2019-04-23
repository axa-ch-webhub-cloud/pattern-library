import '@webcomponents/webcomponentsjs';
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
      // secondary, inverted, red
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
    this.large = false;
    this.motionOff = false;
    this.disabled = false;
    this.onClick = () => {};
  }

  render() {
    const { large, motionOff, disabled, variant = '', icon = '' } = this;
    const classes = {
      'a-button-link--secondary': variant === 'secondary',
      'a-button-link--inverted': variant === 'inverted',
      'a-button-link--red': variant === 'red',
      'a-button-link--large': large,
      'a-button-link--motion': !motionOff,
    };

    return html`
      <a
        class="a-button-link ${classMap(classes)}"
        ?href="${this.href}"
        target="${this.external ? '_blank' : '_top'}"
        ?rel="${this.external && 'noreferrer noopener'}"
        aria-disabled="${disabled}"
        @click="${this.onClick}"
      >
        <slot></slot>
        ${icon &&
          html`
            <axa-icon class="a-button-link__icon" icon="${icon}"></axa-icon>
          `}
      </a>
    `;
  }
}

defineOnce(AXAButtonLink.tagName, AXAButtonLink);

export default AXAButtonLink;
