import { LitElement, html, css, svg, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';

// TODO mock that has to be replaced as soon as real object available
import arrowRight from '../../00-materials/icons/arrow-right';

class AXAFooterSmall extends LitElement {
  static tagName = 'axa-link';
  static styles = css`
    ${unsafeCSS(linkCSS)}
  `;

  static get properties() {
    return {
      text: { type: String },
      // color: PropTypes.oneOf(['red', 'white', 'blue']),
      color: { type: String },
      size: { type: String },
      motion: { type: Boolean },
      arrowLeft: { type: Boolean },
      arrowRight: { type: Boolean },
      href: { type: String },
      listed: { type: Boolean },
      icon: { type: String },
      deco: { type: Boolean },
      iconsPathPrefix: { type: String },
      // target: PropTypes.oneOf(['_blank', '_self']),
      target: { type: String },
    };
  }

  constructor() {
    super();
    this.href = '';
    this.color = '';
    this.size = '';
    this.motion = false;
    this.arrowLeft = false;
    this.arrowRight = false;
    this.listed = false;
    this.icon = '';
    this.deco = false;
    this.iconsPathPrefix = '';
    this.target = '';
  }

  // render() {
  //   return html`
  //     <a href="${href}" class="${classes}" target="${target}">
  //       ${icon &&
  //         html`
  //           <axa-icon path-prefix="${iconsPathPrefix}" icon="${icon}" icon-class="m-link__icon"></axa-icon>
  //         `}
  //       ${listed &&
  //         html`
  //           <axa-icon path-prefix="${iconsPathPrefix}" icon="arrow" icon-class="m-link__listed"></axa-icon>
  //         `}
  //       ${text}
  //       ${arrow &&
  //         html`
  //           <axa-icon path-prefix="${iconsPathPrefix}" icon="arrow" icon-class="m-link__arrow"></axa-icon>
  //         `}
  //     </a>
  //   `;
  // }

  render() {
    const classes = {
      'm-link--red': this.color === 'red',
      'm-link--blue': this.color === 'blue',
      'm-link--white': this.color === 'white',
      'm-link--deco': this.deco,
    };

    return html`
      <a class="m-link ${classMap(classes)}" href="${this.href}">
        ${this.arrowLeft === true ? svg`${arrowRight()}` : ''}
        <slot></slot>
        ${this.arrowRight === true ? svg`${arrowRight()}` : ''}
      </a>
    `;
  }
}

customElements.define(AXAFooterSmall.tagName, AXAFooterSmall);

export default AXAFooterSmall;
