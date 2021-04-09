// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import AXAIcon from '@axa-ch/icon';
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';

class AXALink extends LitElement {
  static get tagName() {
    return 'axa-link';
  }

  static get styles() {
    return css`
      ${unsafeCSS(linkCSS)}
    `;
  }

  // N.B. onClick deliberately not declared here, since
  // its use inside render() is guarded appropriately
  static get properties() {
    return {
      href: { type: String },
      variant: { type: String },
      icon: { type: String },
      external: { type: Boolean },
    };
  }

  constructor() {
    super();
    applyDefaults(this);

    defineVersioned([AXAIcon], __VERSION_INFO__, this);
  }

  render() {
    const { variant } = this;

    const isSimple =
      variant &&
      variant !== 'hyperlink-white' &&
      variant !== 'hyperlink-white-underline';

    const isIcon =
      variant.includes('arrowleft') ||
      variant.includes('arrowright') ||
      variant.includes('icon');

    const isRed = variant.includes('red') && !variant.includes('white');

    const islinkWhite = variant === 'hyperlink-white';

    const islinkWhiteUnderline = variant === 'hyperlink-white-underline';

    const isWhite =
      variant.includes('white') &&
      !variant.includes('red') &&
      !variant.includes('hyperlink');

    const isMotion =
      variant.includes('arrowleft-animated') ||
      variant.includes('arrowright-animated');

    const classes = {
      'a-link--simple': isSimple,
      'a-link--icon': isIcon,
      'a-link--red': isRed,
      'a-link--hyperlink-white': islinkWhite,
      'a-link--hyperlink-white-underline': islinkWhiteUnderline,
      'a-link--white': isWhite,
      'a-link--motion': isMotion,
    };

    // Prettier sets the closing template string literal on a new line, which causes a whitespace after the link.
    // This whole HTML structure should not be changed easily! Depending on how you format it, icons will no longer
    // be displayed and other weird stuff.
    // prettier-ignore
    return html`
      <a
        class="a-link ${classMap(classes)}"
        href="${this.href}"
        @click="${ev => {
          ev.preventDefault();
          if (typeof this.onClick === 'function') {
            this.onClick(ev);
          } else {
            window.open(this.href, this.external ? '_blank' : '_top');
          }
        }}"
        rel="${this.external ? 'noreferrer noopener' : ''}"
      >
        ${this.variant.includes('arrowleft')
          ? versionedHtml(this)`<axa-icon
                    icon="arrow-right"
                    class="a-link__icon a-link__icon--left js-icon"
                  ></axa-icon>`
          : ''}
        ${this.icon &&
        this.variant.includes('icon') &&
        !this.variant.includes('arrow')
          ? versionedHtml(this)`<axa-icon
                    icon="${this.icon}"
                    class="a-link__icon a-link__icon--left js-icon"
                  ></axa-icon>`
          : ''}
          <slot></slot>${this.variant.includes('arrowright')
          ? versionedHtml(this)`<axa-icon icon="arrow-right" class="a-link__icon js-icon"></axa-icon>`
          : ''}</a
      >`;
  }
}

defineVersioned([AXALink], __VERSION_INFO__);

export default AXALink;
