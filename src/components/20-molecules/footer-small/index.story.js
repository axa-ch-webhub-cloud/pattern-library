/* global document */
import { storiesOf } from '@storybook/html';
import './index';

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

const languagesAsString = JSON.stringify(languages);
const disclaimerAsString = JSON.stringify(disclaimer);

storiesOf('Molecules/Footer Small', module).add(
  'Footer Small',
  () =>
    `<axa-footer-small languageLinks='${languagesAsString}' disclaimerLinks='${disclaimerAsString}' copyrightText="© 2019 AXA Insurance Ltd."></axa-footer-small>`
);
