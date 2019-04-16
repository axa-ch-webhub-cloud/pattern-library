/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

const selectedLanguage = 'EN';

storiesOf('Molecules/Footer Small', module)
  .addDecorator(withMarkdown(Readme))
  .add('Footer Small - Static Links', () => {
    const languages = JSON.stringify([
      { text: 'DE', link: 'https://axa.ch/de/privatkunden.html' },
      { text: 'FR', link: 'https://axa.ch/fr/particuliers.html' },
      { text: 'IT', link: 'https://axa.ch/it/clienti-privati.html' },
      { text: 'EN', link: 'https://axa.ch/en/private-customers.html' },
    ]);

    const disclaimer = JSON.stringify([
      { text: 'Terms of use', link: 'https://axa.ch/en/information/terms-of-use.html' },
      { text: 'Data protection', link: 'https://axa.ch/en/information/data-protection.html' },
    ]);

    return `<axa-footer-small languageitems='${languages}' disclaimeritems='${disclaimer}' copyrighttext="© 2019 AXA Insurance Ltd."></axa-footer-small>`;
  })
  .add('Footer Small - Dynamic Links', () => {
    const languages = [{ text: 'DE' }, { text: 'FR' }, { text: 'IT' }, { text: 'EN' }];

    const disclaimer = [
      { text: 'Terms of use', link: 'https://axa.ch/en/information/terms-of-use.html' },
      { text: 'Data protection', link: 'https://axa.ch/en/information/data-protection.html' },
    ];

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
