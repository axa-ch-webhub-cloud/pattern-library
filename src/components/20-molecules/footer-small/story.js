/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Molecules/Footer Small', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })

  .add('Footer Small', () => {
    const languages = JSON.stringify([
      { text: 'DE', link: 'https://axa.ch/de/privatkunden.html' },
      { text: 'FR', link: 'https://axa.ch/fr/particuliers.html' },
      { text: 'IT', link: 'https://axa.ch/it/clienti-privati.html' },
      { text: 'EN', link: 'https://axa.ch/en/private-customers.html' },
    ]);

    const disclaimer = JSON.stringify([
      {
        text: 'Terms of use',
        link: 'https://axa.ch/en/information/terms-of-use.html',
      },
      {
        text: 'Data protection',
        link: 'https://axa.ch/en/information/data-protection.html',
      },
    ]);

    return `<axa-footer-small activelanguage="DE" languageitems='${languages}' disclaimeritems='${disclaimer}' copyrighttext="© 2019 AXA Insurance Ltd."></axa-footer-small>`;
  });
