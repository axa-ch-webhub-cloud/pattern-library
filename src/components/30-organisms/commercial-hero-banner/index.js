/* eslint-disable import/no-extraneous-dependencies */
import { html, css, unsafeCSS } from 'lit-element';
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
    return {
      variant: { type: String }, // PropTypes.oneOf(['white', 'black']),
      imagePosition: { type: String },
    };
  }

  constructor() {
    super();
    this.variant = 'light'; // PropTypes.oneOf(['light', 'dark']),
    this.imagePosition = 'center center';
  }

  // Parent class InlineStyles needs a static method to retrive styles
  // name of such method is passed when calling: this.inlineStyles('resetHeadingCss');
  static get resetHeadingCss() {
    return childStyles;
  }

  firstUpdated() {
    this.inlineStyles('resetHeadingCss');
    if (this.variant === 'dark') {
      this.shadowRoot
        .querySelector('.o-commercial-hero-banner__content')
        .classList.add('o-commercial-hero-banner__text--dark');
      this.shadowRoot
        .querySelector('.o-commercial-hero-banner__container')
        .classList.add('o-commercial-hero-banner__container--dark');
    }
  }

  render() {
    return html`
      <style>
        .o-commercial-hero-banner {
          background: url('${this.src}') no-repeat ${this.imagePosition};
        }
      </style>
      <header class="o-commercial-hero-banner">
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
  }
}

defineOnce(AXACommercialHeroBanner.tagName, AXACommercialHeroBanner);

export default AXACommercialHeroBanner;
