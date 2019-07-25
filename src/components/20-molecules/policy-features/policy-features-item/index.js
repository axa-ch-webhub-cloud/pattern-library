import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { EmailSvg, DownloadSvg } from '@axa-ch/materials/icons';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../../utils/define-once';
import styles from './index.scss';
import { xhrCall } from '../../../../utils/requests';

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
      icon: { type: String },
      title: { type: String },
      description: { type: String },
    };
  }

  static get iconsMapping() {
    return {
      download: DownloadSvg,
      email: EmailSvg,
    };
  }

  firstUpdated() {
    const { icon } = this;

    if (/\.svg/.test(icon)) {
      xhrCall(icon).then(result => {
        this.shadowRoot.getElementById(
          'policy-features-item-icon'
        ).innerHTML = result;
      });
    }
  }

  render() {
    const { icon, title, description } = this;

    return html`
      <article class="policy-features-item">
        <div id="policy-features-item-icon" class="policy-features-item__icon">
          ${svg([AXAPolicyFeaturesItem.iconsMapping[icon] || ''])}
        </div>
        <h1 class="policy-features-item__title">${title}</h1>
        <p class="policy-features-item__description">${description}</p>
      </article>
    `;
  }
}

defineOnce(AXAPolicyFeaturesItem.tagName, AXAPolicyFeaturesItem);

export default AXAPolicyFeaturesItem;
