/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import withNoBorder from '../../../../.storybook/addons/no-border';
import Readme from './README.md';

storiesOf('Molecules/Footer Small', module)
  .addDecorator(withNoBorder)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })

  .add('Footer Small', () => {
    const languages = JSON.stringify([
      { key: 'de', text: 'DE', link: 'https://axa.ch/de/privatkunden.html' },
      {
        key: 'fr',
        text: 'FR',
        link: 'https://axa.ch/fr/particuliers.html',
      },
      {
        key: 'it',
        text: 'IT',
        link: 'https://axa.ch/it/clienti-privati.html',
      },
      {
        key: 'en',
        text: 'EN',
        link: 'https://axa.ch/en/private-customers.html',
      },
    ]);

    const disclaimer = JSON.stringify([
      {
        key: 'tos',
        text: 'Terms of use',
        link: 'https://axa.ch/en/information/terms-of-use.html',
      },
      {
        key: 'privacy',
        text: 'Data protection',
        link: 'https://axa.ch/en/information/data-protection.html',
      },
    ]);

    return `<axa-footer-small activelanguage="de" languageitems='${languages}' disclaimeritems='${disclaimer}' copyrighttext="© 2019 AXA Insurance Ltd."></axa-footer-small>`;
  });
