import { html } from 'lit-html';

export default html`
  <axa-footer-small>
    <a
      slot="language-item"
      href="https://axa.ch/de/privatkunden.html"
      class="m-footer-small__link--active"
    >
      DE
    </a>
    <a slot="language-item" href="https://axa.ch/fr/particuliers.html">
      FR
    </a>
    <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
      IT
    </a>
    <a slot="language-item" href="https://axa.ch/en/private-customers.html">
      EN
    </a>
    <a
      slot="disclaimer-item"
      href="https://axa.ch/en/information/terms-of-use.html"
    >
      Terms of use
    </a>
    <a
      slot="disclaimer-item"
      href="https://axa.ch/en/information/data-protection.html"
    >
      Data protection
    </a>
    <span slot="copyright">&copy; 2019 AXA Insurance Ltd.</span>
  </axa-footer-small>
`;
