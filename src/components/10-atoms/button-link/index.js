import { html, css, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import AXAIcon from '@axa-ch/icon';

import { applyDefaults } from '../../../utils/with-react';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import buttonLinkCSS from './index.scss';
import childStyles from './child.scss';
import InlineStyles from '../../../utils/inline-styles';

const ARROW_RIGHT = 'arrow-right';

class AXAButtonLink extends InlineStyles {
  static get tagName() {
    return 'axa-button-link';
  }

  static get styles() {
    return css`
      ${unsafeCSS(buttonLinkCSS)}
    `;
  }

  // Parent class InlineStyles needs a static method to retrive styles
  // name of such method is passed when calling: this.inlineStyles('resetHeadingCss');
  static get blockMouseEventsCss() {
    return childStyles;
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
      onClick: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    defineVersioned([AXAIcon], __VERSION_INFO__, this);
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
      'a-button-link--motion': !motionOff && !disabled,
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
            ? versionedHtml(this)`
                <axa-icon class="a-button-link__icon" icon="${icon}"></axa-icon>
              `
            : ''}
          <slot></slot>
          ${this.showArrow
            ? versionedHtml(this)`
                <axa-icon
                  class="a-button-link__arrow js-button-link__arrow"
                  icon="arrow-right"
                ></axa-icon>
              `
            : ''}
        </span>
      </a>
    `;
  }

  firstUpdated() {
    this.inlineStyles('blockMouseEventsCss');
  }
}

defineVersioned([AXAButtonLink], __VERSION_INFO__);

export default AXAButtonLink;
