import { css, html, LitElement, unsafeCSS } from 'lit-element';
import defineOnce from '../../../../utils/define-once';
import styles from './index.scss';

class PLCallout extends LitElement {
  static get tagName() {
    return 'pl-callout';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      icon: { type: String },
      header: { type: String },
      text: { type: String },
      link: { type: String },
      linkText: { type: String },
    };
  }

  render() {
    const { icon, header, text, link, linkText } = this;

    return html`
      <div class="callout">
        <div class="callout__image">
          <img src="${icon}" alt="AXA Design System UI Kit" />
        </div>
        <div class="callout__col callout__col-padding">
          <p class="callout__header">${header}</p>
          <p class="callout__text">
            ${text}
          </p>
        </div>
        <div class="callout__col">
          <axa-button-link
            style="width: 100%;"
            size="large"
            href="${link}"
            external=""
          >
            ${linkText}
          </axa-button-link>
        </div>
      </div>
    `;
  }
}

defineOnce(PLCallout.tagName, PLCallout);
export default PLCallout;
