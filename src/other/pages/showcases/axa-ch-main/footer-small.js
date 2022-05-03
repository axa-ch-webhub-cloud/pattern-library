import { html } from 'lit';

export default html`
  <axa-footer-small>
    <a slot="language-item" href="#" class="m-footer-small__link--active">
      DE
    </a>
    <a slot="language-item" href="#"> FR </a>
    <a slot="language-item" href="#"> IT </a>
    <a slot="language-item" href="#"> EN </a>
    <a slot="disclaimer-item" href="#"> Terms of use </a>
    <a slot="disclaimer-item" href="#"> Data protection </a>
    <span slot="copyright">&copy; 2019 AXA Insurance Ltd.</span>
  </axa-footer-small>
`;
