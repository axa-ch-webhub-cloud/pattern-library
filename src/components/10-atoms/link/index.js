import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';

class AXALink extends LitElement {
  static tagName = 'axa-link';
  static styles = css`
    ${unsafeCSS(linkCSS)}
  `;

  showArrow = html`
    <axa-icon icon="arrow-right" class="a-link__arrow"></axa-icon>
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
      heavy: { type: Boolean },
      heavyActive: { type: Boolean },
      heavySmall: { type: Boolean },
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
    this.heavy = false;
    this.heavyActive = false;
    this.heavySmall = false;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    const classes = classMap({
      'a-link--red': this.color === 'red',
      'a-link--blue': this.color === 'blue',
      'a-link--white': this.color === 'white',
      'a-link--bold': this.bold,
      'a-link--deco': this.deco,
      'a-link--motion': this.motion,
      'a-link--heavy': this.heavy,
      'a-link--heavy-active': this.heavyActive,
      'a-link--heavy-small': this.heavySmall,
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
              <span class="a-link__arrow">${this.showArrow}</span>
            `
          : ''}
        <slot></slot>
        ${this.arrowRight
          ? html`
              <span class="a-link__arrow">${this.showArrow}</span>
            `
          : ''}
      </a>
    `;
  }
}

customElements.define(AXALink.tagName, AXALink);

export default AXALink;
