import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';

class AXALink extends LitElement {
  static tagName = 'axa-link';
  static styles = css`
    ${unsafeCSS(linkCSS)}
  `;

  static get properties() {
    return {
      href: { type: String },
      color: { type: String },
      bold: { type: Boolean },
      arrowLeft: { type: Boolean },
      arrowRight: { type: Boolean },
      deco: { type: Boolean },
      external: { type: Boolean },
      motion: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.href = '';
    this.color = '';
    this.bold = false;
    this.arrowLeft = false;
    this.arrowRight = false;
    this.deco = false;
    this.external = false;
    this.motion = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  showArrow = html`
    <axa-icon icon="arrow-right" class="a-link__arrow"></axa-icon>
  `;

  render() {
    const classes = classMap({
      'a-link--red': this.color === 'red',
      'a-link--blue': this.color === 'blue',
      'a-link--white': this.color === 'white',
      'a-link--bold': this.bold,
      'a-link--deco': this.deco,
      'a-link--motion': this.motion,
    });

    return html`
      <a
        class="a-link ${classes}"
        href="${this.href}"
        target="${this.external ? '_blank' : '_top'}"
        rel="${this.external ? 'noreferrer noopener' : ''}"
      >
        ${this.arrowLeft
          ? html`
              <div class="a-link__arrow">${this.showArrow}</div>
            `
          : ''}
        <slot></slot>
        ${this.arrowRight
          ? html`
              <div class="a-link__arrow">${this.showArrow}</div>
            `
          : ''}
      </a>
    `;
  }
}

customElements.define(AXALink.tagName, AXALink);

export default AXALink;
