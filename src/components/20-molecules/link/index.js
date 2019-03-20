import { LitElement, html, css, svg, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';

// TODO mock that has to be replaced as soon as real object available
import arrowRight from '../../00-materials/icons/arrow-right';

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

  render() {
    const classes = {
      'm-link--red': this.color === 'red',
      'm-link--blue': this.color === 'blue',
      'm-link--white': this.color === 'white',
      'm-link--bold': this.bold,
      'm-link--deco': this.deco,
      'm-link--motion': this.motion,
    };

    return html`
      <a
        class="m-link ${classMap(classes)}"
        href="${this.href}"
        target="${this.external ? '_blank' : '_top'}"
        rel="${this.external ? 'noreferrer noopener' : ''}"
      >
        <div class="m-link--arrow">
          ${this.arrowLeft === true ? svg`${arrowRight()}` : ''}
        </div>
        <slot></slot>
        <div class="m-link--arrow">
          ${this.arrowRight === true ? svg`${arrowRight()}` : ''}
        </div>
      </a>
    `;
  }
}

customElements.define(AXALink.tagName, AXALink);

export default AXALink;
