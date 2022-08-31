import { html } from 'lit';

export default html`
  <axa-commercial-hero-banner
    variant="dark"
    imagesource="https://brandcenter.axa.ch/m/4df4627fddd0534a/WIDE_1920_560-AXA_DE_DANNY_web.jpg"
  >
    <h2 slot="category">
      Take out household contents and personal liability insurance now and
      benefit
    </h2>
    <h1 slot="title">Discount of up to CHF 200</h1>
    <axa-button href="#" slot="button" variant="red" size="large"
      >Calculate the premium now</axa-button
    >
  </axa-commercial-hero-banner>
`;
