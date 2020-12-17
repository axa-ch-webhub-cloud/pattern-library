import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Footer Small',
  decorators: [withNoBorder, withKnobs],
  parameters: {
    readme,
    usage: {
      componentName: 'footer-small',
      innerHTML: '...children',
    },
    changelog,
  },
};

export const FooterSmall = () => {
  const language1 = text('First language', `DE`);
  const language2 = text('Second language', `FR`);
  const language3 = text('Third language', `IT`);
  const language4 = text('Fourth language', `EN`);
  const termsOfUse = text('Terms of use', `Terms of use`);
  const dataProtection = text('Data protection', `Data protection`);

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
