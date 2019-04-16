/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

const languages = [
  { text: 'DE', link: 'https://axa.ch/de/privatkunden.html' },
  { text: 'FR', link: 'https://axa.ch/fr/particuliers.html' },
  { text: 'IT', link: 'https://axa.ch/it/clienti-privati.html' },
  { text: 'EN', link: 'https://axa.ch/en/private-customers.html' },
];

const disclaimer = [
  { text: 'Terms of use', link: 'https://axa.ch/en/information/terms-of-use.html' },
  { text: 'Data protection', link: 'https://axa.ch/en/information/data-protection.html' },
];

const hans = language => console.log(language);

storiesOf('Molecules/Footer Small', module)
  .addDecorator(withMarkdown(Readme))
  .add('Footer Small', () => {
    const footerSmall = document.createElement('axa-footer-small');
    footerSmall.activeLanguage = 'EN';
    footerSmall.languageItems = languages;
    footerSmall.disclaimerItems = disclaimer;

    footerSmall.addEventListener('language-change', () => {
      console.log('language is now changed');
    });
    return footerSmall;
  });
