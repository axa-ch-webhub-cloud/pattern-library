import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { EmailSvg } from '@axa-ch/materials/icons';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../../utils/define-once';
import styles from './index.scss';
import {
  ArrowRightSvg,
  CollapseSvg,
  DocumentSvg,
  DownloadSvg,
  ExpandSvg,
  MobileSvg, PhoneSvg, PlusSvg, SearchSvg, UploadSvg,
} from '../../../00-materials/icons';

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
    // Define properties and types
    return {
      onClick: { type: Function },
      icon: {type: String},
      iconAlt: {type: String},
      title: {type: String},
      description: {type: String},
    };
  }

  static get iconsMapping() {
    return {
      download: DownloadSvg,
      email: EmailSvg
    };
  }

  constructor() {
    super();
    this.onClick = () => {};
  }

  firstUpdated() {
    // Add DOM changes here
    // This will be rendered when the component is connected to the DOM
  }

  render() {
    const { icon, iconAlt, title, description } = this;

    return html`
      <article class="policy-features-item">
        <div class="policy-features-item__icon">${ svg([AXAPolicyFeaturesItem.iconsMapping[icon] || '']) }</div>
        <h1 class="policy-features-item__title">${title}</h1>
        <p class="policy-features-item__description">${description}</p>
      </article>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Cleanup and reset (i.e event listeners)
  }
}

defineOnce(AXAPolicyFeaturesItem.tagName, AXAPolicyFeaturesItem);

export default AXAPolicyFeaturesItem;
