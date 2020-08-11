import { html } from 'lit-html';
import styles from './index.scss';

export default html`
<style>${styles}</style>
<section class="contact-footer">
  <div class="contact-footer-inner">
    <div>
      <p class="contact-footer-subtitle">Help & Contact</p>
      <axa-heading rank="4" variant="secondary">Any question?<axa-heading>
    </div>
    <axa-button-link href="/?path=/story/contact--contact" variant="inverted">
      Get in touch
    </axa-button-link>
  </div>
</section>`;
