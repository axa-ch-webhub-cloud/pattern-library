/* eslint-disable import/no-extraneous-dependencies */
import { html, css, unsafeCSS } from 'lit-element';
import '@axa-ch/container';
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
      variant: { type: String },
      imageSource: { type: String },
    };
  }

  constructor() {
    super();
    this.variant = 'light';
    this.imageSource = '';
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
    // Workaround: I had to remove the <style> tag and use inline-styles
    // property instead, otherwise, in the testcafe chrome, it would not
    // display the component. This seems to be connected to 'src' being
    // a prop, because hardcoded it works. Feel free to apply magic.
    return html`
      <header class="o-commercial-hero-banner">
        <div class="o-commercial-hero-banner__container">
          <div
            class="o-commercial-hero-banner__picture-container"
            style="background: url('${this
              .imageSource}') no-repeat center center;background-size: cover;"
          ></div>
          <axa-container>
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
            </div>
          </axa-container>
        </div>
      </header>
    `;
  }
}

defineOnce(AXACommercialHeroBanner.tagName, AXACommercialHeroBanner);

export default AXACommercialHeroBanner;
