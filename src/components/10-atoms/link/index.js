import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';
import '../../../utils/polyfills';

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

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const classes = classMap({
      'a-link--simple': this.variant,
      'a-link--icon':
        this.variant.includes('arrowleft') ||
        this.variant.includes('arrowright') ||
        this.variant.includes('icon'),
      'a-link--red':
        this.variant.includes('red') && !this.variant.includes('white'),
      'a-link--white':
        this.variant.includes('white') && !this.variant.includes('red'),
      'a-link--motion':
        this.variant.includes('arrowleft-animated') ||
        this.variant.includes('arrowright-animated'),
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

customElements.define(AXALink.tagName, AXALink);

export default AXALink;
