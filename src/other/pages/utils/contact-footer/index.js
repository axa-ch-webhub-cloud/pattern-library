import { css, html, unsafeCSS } from 'lit';
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

  render() {
    return html`
      <section class="contact-footer">
        <div class="contact-footer__inner">
          <div>
            <p class="contact-footer__subtitle">Help & Contact</p>
            <axa-heading rank="4" secondary>Any question?<axa-heading>
          </div>
          <axa-button size="large" href="${INTERNAL_LINK}" variant="inverted">
            Get in touch
          </axa-button>
        </div>
      </section>
    `;
  }
}

defineOnce(PLContactFooter.tagName, PLContactFooter);
export default PLContactFooter;
