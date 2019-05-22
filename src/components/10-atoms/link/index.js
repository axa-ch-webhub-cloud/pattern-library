// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';
import defineOnce from '../../../utils/define-once';

class AXALink extends LitElement {
  static tagName = 'axa-link';
  static styles = css`
    ${unsafeCSS(linkCSS)}
  `;

  static get properties() {
    return {
      href: { type: String },
      variant: { type: String },
      icon: { type: String },
      external: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.href = '';
    this.variant = '';
    this.icon = '';
    this.external = false;
  }

  render() {
    const { variant } = this;
    const classes = classMap({
      'a-link--simple':
        variant && variant !== 'hyperlink-white' && variant !== 'intext-white',
      'a-link--icon':
        variant.includes('arrowleft') ||
        variant.includes('arrowright') ||
        variant.includes('icon'),
      'a-link--red': variant.includes('red') && !variant.includes('white'),
      'a-link--hyperlink-white': variant === 'hyperlink-white',
      'a-link--intext-white': variant === 'intext-white',
      'a-link--white': variant === 'white' && !variant.includes('red'),
      'a-link--motion':
        variant.includes('arrowleft-animated') ||
        variant.includes('arrowright-animated'),
    });

    return html`
      <a
        class="a-link ${classes}"
        href="${this.href}"
        target="${this.external ? '_blank' : '_top'}"
        rel="${this.external ? 'noreferrer noopener' : ''}"
      >
        ${this.variant.includes('arrowleft')
          ? html`
              <axa-icon
                icon="arrow-right"
                class="a-link__icon a-link__icon--left"
              ></axa-icon>
            `
          : ''}
        ${this.icon &&
        this.variant.includes('icon') &&
        !this.variant.includes('arrow')
          ? html`
              <axa-icon
                icon="${this.icon}"
                class="a-link__icon a-link__icon--left"
              ></axa-icon>
            `
          : ''}
        <slot></slot>
        ${this.variant.includes('arrowright')
          ? html`
              <axa-icon icon="arrow-right" class="a-link__icon"></axa-icon>
            `
          : ''}
      </a>
    `;
  }
}

defineOnce(AXALink.tagName, AXALink);

export default AXALink;
