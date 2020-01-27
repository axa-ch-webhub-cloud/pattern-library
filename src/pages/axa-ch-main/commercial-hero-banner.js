import { html } from 'lit-html';

export default html`
  <axa-commercial-hero-banner
    variant="dark"
    imagesource="https://brandcenter.axa.ch/m/4df4627fddd0534a/WIDE_1920_560-AXA_DE_DANNY_web.jpg"
  >
    <h2 slot="category">
      Jetzt Haushalt und Privathaftpflicht versichern und profitieren
    </h2>
    <h1 slot="title">Bis zu CHF 200.– Rabatt</h1>
    <axa-button-link
      href="https://axa.ch"
      slot="button"
      variant="red"
      size="large"
      >Jetzt prämie berechnen</axa-button-link
    >
  </axa-commercial-hero-banner>
`;
