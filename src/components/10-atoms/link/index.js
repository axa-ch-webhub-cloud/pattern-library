import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';

class AXALink extends LitElement {
  static tagName = 'axa-link';
  static styles = css`
    ${unsafeCSS(linkCSS)}
  `;

  connectedCallback() {
    super.connectedCallback();
    this.classes = classMap({
      'm-link--red': this.color === 'red',
      'm-link--blue': this.color === 'blue',
      'm-link--white': this.color === 'white',
      'm-link--bold': this.bold,
      'm-link--deco': this.deco,
      'm-link--motion': this.motion,
    });

    this.arrow = arrowRight();
  }

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

  render() {
    return html`
      <a
        class="m-link ${this.classes}"
        href="${this.href}"
        target="${this.external ? '_blank' : '_top'}"
        rel="${this.external ? 'noreferrer noopener' : ''}"
      >
        ${this.arrowLeft
          ? html`
              <div class="m-link__arrow">${this.arrow}</div>
            `
          : ''}
        <slot></slot>
        ${this.arrowRight
          ? html`
              <div class="m-link__arrow">${this.arrow}</div>
            `
          : ''}
      </a>
    `;
  }
}

customElements.define(AXALink.tagName, AXALink);

export default AXALink;
