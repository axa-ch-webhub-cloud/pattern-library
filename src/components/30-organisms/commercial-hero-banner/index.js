/* eslint-disable import/no-extraneous-dependencies */
import { html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
// import 'picturefill';
// import 'objectFitPolyfill';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';
import childStyles from './child.scss';
import InlineStyles from '../../../utils/inline-styles';

class AXACommercialHeroBanner extends InlineStyles {
  static get tagName() {
    return 'axa-commercial-hero-banner';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      // ### Old props
      onClick: { type: Function },
      src: { type: String },
      alt: { type: String },
      gradient: { type: String }, // PropTypes.oneOf(['white', 'black']),
      contentAlign: { type: String }, // PropTypes.oneOf(['left', 'right']),
      pictureClasses: { type: String },
      heroObjectPosition: { type: String },
      // ###
      variant: { type: String }, // PropTypes.oneOf(['white', 'black']),
    };
  }

  constructor() {
    super();
    // ### Old props
    this.onClick = () => {};
    this.src = '';
    this.alt = '';
    this.gradient = 'white'; // PropTypes.oneOf(['white', 'black']),
    this.contentAlign = 'left'; // PropTypes.oneOf(['left', 'right']),
    this.pictureClasses = '';
    this.heroObjectPosition = '';
    // ###
    this.variant = 'light'; // PropTypes.oneOf(['light', 'dark']),
  }

  // Parent class InlineStyles needs a static method to retrive styles
  // name of such method is passed when calling: this.inlineStyles('resetHeadingCss');
  static get resetHeadingCss() {
    return childStyles;
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
    this.inlineStyles('resetHeadingCss');
  }

  render() {
    const variantClass = {
      'o-commercial-hero-banner__content_dark': this.variant === 'dark',
    };

    return html`
      <style>
        .o-commercial-hero-banner {
          background: url('https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg')
            no-repeat center center;
        }
      </style>
      <header class="o-commercial-hero-banner ${classMap(variantClass)}">
        <div class="o-commercial-hero-banner__container">
          <axa-container>
            <div class="o-commercial-hero-banner__photo-holder">&nbsp;</div>
            <div class="o-commercial-hero-banner__content">
              <div class="o-commercial-hero-banner__content-item">
                <div class="o-commercial-hero-banner__content-item-box">
                  <slot name="category"></slot>
                  <slot name="title"></slot>
                  <slot name="content"></slot>
                  <slot name="disclaimer"></slot>
                  <div class="o-commercial-hero-banner__content-buttons">
                    <slot
                      name="button"
                      class="o-commercial-hero-banner__content-button"
                    ></slot>
                    <slot
                      name="button"
                      class="o-commercial-hero-banner__content-button"
                    ></slot>
                  </div>
                </div>
              </div>
              <div class="o-commercial-hero-banner__content-item"></div>
            </div>
          </axa-container>
        </div>
      </header>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXACommercialHeroBanner.tagName, AXACommercialHeroBanner);

export default AXACommercialHeroBanner;
