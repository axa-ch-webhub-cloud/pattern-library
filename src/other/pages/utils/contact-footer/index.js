import { css, html, unsafeCSS } from 'lit-element';
import defineOnce from '../../../../utils/define-once';
import NoShadowDOM from '../../../../utils/no-shadow';
import styles from './index.scss';

const INTERNAL_LINK = `${window.location.href.replace(
  /\/[^/]*$/,
  ''
)}/?path=/story/others-contact--contact`;

class PLContactFooter extends NoShadowDOM {
  static get tagName() {
    return 'pl-contact-footer';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <section class="contact-footer">
        <div class="contact-footer__inner">
          <div>
            <p class="contact-footer__subtitle">Help & Contact</p>
            <axa-heading rank="4" variant="secondary">Any question?<axa-heading>
          </div>
          <axa-button-link size="large" href="${INTERNAL_LINK}" variant="inverted">
            Get in touch
          </axa-button-link>
        </div>
      </section>
    `;
  }
}

defineOnce(PLContactFooter.tagName, PLContactFooter);
export default PLContactFooter;
