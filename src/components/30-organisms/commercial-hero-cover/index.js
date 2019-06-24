import { LitElement, html, css, unsafeCSS } from 'lit-element';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXACommercialHeroCover extends LitElement {
  static get tagName() {
    return 'axa-commercial-hero-cover';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      // onClick: { type: Function },
      src: { type: String },
      alt: { type: String },
      gradient: { type: String }, // PropTypes.oneOf(['white', 'black']),
      contentAlign: { type: String }, //PropTypes.oneOf(['left', 'right']),
      pictureClasses: { type: String },
      heroObjectPosition: { type: String },
    };
  }

  constructor() {
    super();
    // this.onClick = () => {};
    this.src = '';
    this.alt = '';
    this.gradient = 'white'; // PropTypes.oneOf(['white', 'black']),
    this.contentAlign = 'left'; //PropTypes.oneOf(['left', 'right']),
    this.pictureClasses = '';
    this.heroObjectPosition = '';
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  render() {
    return html`
      <header
        class="o-commercial-hero-cover o-commercial-hero-cover__header o-commercial-hero-cover__header__${this
          .gradient === 'white'
          ? 'gradient-white'
          : 'gradient-black'}${this.contentAlign === 'right'
          ? '-inverted'
          : ''}"
      >
        <picture class="m-picture o-commercial-hero-cover__picture">
          <img
            class="m-picture__image o-commercial-hero-cover__picture__image  ${this
              .pictureClasses}"
            src="${this.src}"
            alt="${this.alt}"
            data-object-fit="cover"
            data-object-position="${this.heroObjectPosition}"
          />
        </picture>
        <axa-container
          class="o-commercial-hero-cover__info"
          classes="o-commercial-hero-cover__full-height"
        >
          <axa-row classes="o-commercial-hero-cover__full-height"> </axa-row>
        </axa-container>
      </header>
    `;
  }
  // <axa-col
  //   size="sm-12 lg-6"
  //   order="${this.contentAlign === 'left' ? '0' : '1'}"
  //   classes="o-commercial-hero-cover__flex"
  // >
  //   ${childrenFragment.querySelector(
  //     '.js-commercial-hero-cover__first'
  //   ) || childrenFragment}
  // </axa-col>
  // <axa-col size="sm-12 lg-6">
  //   ${childrenFragment.querySelector(
  //     '.js-commercial-hero-cover__second'
  //   ) || ''}
  // </axa-col>

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXACommercialHeroCover.tagName, AXACommercialHeroCover);

export default AXACommercialHeroCover;
