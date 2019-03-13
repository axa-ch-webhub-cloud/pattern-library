/* global document */
import { storiesOf } from '@storybook/html';
import './index';

const languages = [
  { text: 'DE', link: 'https://google.ch' },
  { text: 'FR', link: 'https://google.ch' },
  { text: 'IT', link: 'https://google.ch' },
  { text: 'EN', link: 'https://google.ch' },
];

const disclaimer = [{ text: 'Terms of use', link: 'https://google.ch' }, { text: 'Data protection', link: 'https://google.ch' }];

const languagesAsString = JSON.stringify(languages);
const disclaimerAsString = JSON.stringify(disclaimer);

storiesOf('Footer Small', module).add(
  'Footer Small',
  () =>
    `<axa-footer-small languageLinks='${languagesAsString}' disclaimerLinks='${disclaimerAsString}' copyrightText="© 2019 AXA Insurance Ltd."></axa-footer-small>`
);
