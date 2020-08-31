import { html } from 'lit-html';
import styles from './index.scss';

const internalLink = `${window.location.href.replace(
  /\/[^\/]*$/,
  ''
)}/?path=/story/others-contact--contact`;

export default html`
<style>${styles}</style>
<section class="contact-footer">
  <div class="contact-footer__inner">
    <div>
      <p class="contact-footer__subtitle">Help & Contact</p>
      <axa-heading rank="4" variant="secondary">Any question?<axa-heading>
    </div>
    <axa-button-link size="large" href="${internalLink}" variant="inverted">
      Get in touch
    </axa-button-link>
  </div>
</section>
`;
