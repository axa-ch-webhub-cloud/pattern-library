import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Footer Small',
  parameters: {
    readme,
    usage: {
      innerHTML: '...children',
    },
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const FooterSmall = ({
  firstLanguage,
  secondLanguage,
  thirdLanguage,
  fourthLanguage,
  termOfUse,
  dataProtection,
}) => html`
  <axa-footer-small>
    <a
      slot="language-item"
      href="https://axa.ch/de/privatkunden.html"
      class="m-footer-small__link--active"
    >
      ${firstLanguage}
    </a>
    <a slot="language-item" href="https://axa.ch/fr/particuliers.html">
      ${secondLanguage}
    </a>
    <a slot="language-item" href="https://axa.ch/it/clienti-privati.html">
      ${thirdLanguage}
    </a>
    <a slot="language-item" href="https://axa.ch/en/private-customers.html">
      ${fourthLanguage}
    </a>
    <a
      slot="disclaimer-item"
      href="https://axa.ch/en/information/terms-of-use.html"
    >
      ${termOfUse}
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
