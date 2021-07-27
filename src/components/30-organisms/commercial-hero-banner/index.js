/* eslint-disable import/no-extraneous-dependencies */
import { css, unsafeCSS } from 'lit';
import { classMap } from 'lit-html/directives/class-map';
import AXAContainer from '@axa-ch/container';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
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
      variant: { type: String, defaultValue: 'light' },
      imageSource: { type: String },
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    defineVersioned([AXAContainer], __VERSION_INFO__, this);
  }

  // Parent class InlineStyles needs a static method to retrive styles
  // name of such method is passed when calling: this.inlineStyles('resetHeadingCss');
  static get resetHeadingCss() {
    return childStyles;
  }

  firstUpdated() {
    this.inlineStyles('resetHeadingCss');
  }

  render() {
    const contentClasses = {
      'o-commercial-hero-banner__content': true,
      'o-commercial-hero-banner__text--dark': this.variant === 'dark',
    };

    const containerClasses = {
      'o-commercial-hero-banner__container': true,
      'o-commercial-hero-banner__container--dark': this.variant === 'dark',
    };

    // Workaround: I had to remove the <style> tag and use inline-styles
    // property instead, otherwise, in the testcafe chrome, it would not
    // display the component. This seems to be connected to 'src' being
    // a prop, because hardcoded it works. Feel free to apply magic.
    /* eslint-disable indent */
    return versionedHtml(this)`
      <header class="o-commercial-hero-banner">
        <div class="${classMap(containerClasses)}">
          <div
            class="o-commercial-hero-banner__picture-container"
            style="background: url('${
              this.imageSource
            }') no-repeat center center;background-size: cover;"
          ></div>
          <axa-container>
            <div class="${classMap(contentClasses)}">
              <div class="o-commercial-hero-banner__content-item">
                <div class="o-commercial-hero-banner__content-item-box">
                  <slot name="title"></slot>
                  <slot name="content"></slot>
                  <slot name="disclaimer"></slot>
                  <slot name="button"></slot>
                  <slot name="addon-section"></slot>
                </div>
              </div>
            </div>
          </axa-container>
        </div>
      </header>
    `;
  }
}

defineVersioned([AXACommercialHeroBanner], __VERSION_INFO__);

export default AXACommercialHeroBanner;
