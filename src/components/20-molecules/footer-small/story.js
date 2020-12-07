import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Footer Small',
  decorators: [withNoBorder],
  parameters: {
    readme,
    changelog,
  },
};

export const FooterSmall = ({
  language1,
  language2,
  language3,
  language4,
  termsOfUse,
  dataProtection,
}) => {
  const wrapper = document.createElement('div');

  const template = html`
    <axa-footer-small>
      <a
        slot="language-item"
        href="https://axa.ch/de/privatkunden.html"
        class="m-footer-small__link--active"
      >
        ${language1}
      </a>
      <a slot="language-item" href="https://axa.ch/fr/particuliers.html">
        ${language2}
      </a>
      <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
        ${language3}
      </a>
      <a slot="language-item" href="https://axa.ch/en/private-customers.html">
        ${language4}
      </a>
      <a
        slot="disclaimer-item"
        href="https://axa.ch/en/information/terms-of-use.html"
      >
        ${termsOfUse}
      </a>
      <a
        slot="disclaimer-item"
        href="https://axa.ch/en/information/data-protection.html"
      >
        ${dataProtection}
      </a>
      <span slot="copyright">&copy; 2019 AXA Insurance Ltd.</span>
    </axa-footer-small>
  `;

  render(template, wrapper);
  return wrapper;
};

FooterSmall.args = {
  language1: 'DE',
  language2: 'FR',
  language3: 'IT',
  language4: 'EN',
  termsOfUse: `Terms of use`,
  dataProtection: `Data protection`,
};

FooterSmall.argTypes = {
  language1: { name: 'set first language' },
  language2: { name: 'set second language' },
  language3: { name: 'set third language' },
  language4: { name: 'set fourth language' },
  termsOfUse: { name: 'set terms of use' },
  dataProtection: { name: 'set data protection' },
};
