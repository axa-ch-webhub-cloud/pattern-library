/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

const selectedLanguage = 'EN';

const languages = [
  { text: 'DE' },
  { text: 'FR', link: 'https://axa.ch/fr/particuliers.html' },
  { text: 'IT', link: 'https://axa.ch/it/clienti-privati.html' },
  { text: 'EN', link: 'https://axa.ch/en/private-customers.html' },
];

const disclaimer = [
  { text: 'Terms of use', link: 'https://axa.ch/en/information/terms-of-use.html' },
  { text: 'Data protection', link: 'https://axa.ch/en/information/data-protection.html' },
];

storiesOf('Molecules/Footer Small', module)
  .addDecorator(withMarkdown(Readme))
  .add('Footer Small', () => {
    let wrapper = document.createElement('div');
    let activeLanguage = document.createElement('p');
    activeLanguage.id = 'active-language';
    activeLanguage.innerText = `Current Language: ${selectedLanguage}`;

    const footerSmall = document.createElement('axa-footer-small');
    footerSmall.activeLanguage = selectedLanguage;
    footerSmall.languageItems = languages;
    footerSmall.disclaimerItems = disclaimer;
    footerSmall.copyrightText = '© 2019 AXA Insurance Ltd.';

    wrapper.appendChild(footerSmall);
    wrapper.appendChild(activeLanguage);

    footerSmall.addEventListener('axa-language-change', languageEvent => {
      const language = document.getElementById('active-language');
      language.innerText = `Current Language: ${languageEvent.detail}`;
    });

    return wrapper;
  });
