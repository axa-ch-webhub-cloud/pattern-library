import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import styles from './index.scss';
import { xhrCall } from '../../../../utils/requests';
import defineOnce from '../../../../utils/define-once';
import { sanitizeSVG } from '../../../../utils/sanitize';

class AXAPolicyFeaturesItem extends LitElement {
  static get tagName() {
    return 'axa-policy-features-item';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      _loadedSvg: { type: String },
    };
  }

  constructor() {
    super();
    this.title = '';
    this.icon = '';
    this.description = '';
    this._loadedSvg = null;
  }

  firstUpdated() {
    const { icon } = this;

    if (/\.svg/.test(icon)) {
      xhrCall(icon).then(result => {
        this._loadedSvg = result;
      });
    } else if (/<svg/.test(icon)) {
      this._loadedSvg = icon;
    }
  }

  render() {
    const { _loadedSvg, title, description } = this;

    return html`
      <section class="m-policy-features-item">
        <div class="m-policy-features-item__icon">
          ${_loadedSvg && unsafeHTML(sanitizeSVG(_loadedSvg))}
        </div>
        <h1 class="m-policy-features-item__title">${title}</h1>
        <p class="m-policy-features-item__description">${description}</p>
      </section>
    `;
  }
}

defineOnce(AXAPolicyFeaturesItem.tagName, AXAPolicyFeaturesItem);

export default AXAPolicyFeaturesItem;
