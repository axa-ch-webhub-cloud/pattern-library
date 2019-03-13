/* global document */
import { storiesOf } from '@storybook/html';
import './index';

const languages = [
  { code: 'DE', link: 'https://google.ch' },
  { code: 'FR', link: 'https://google.ch' },
  { code: 'IT', link: 'https://google.ch' },
  { code: 'EN', link: 'https://google.ch' },
];

const languagesAsString = JSON.stringify(languages);

storiesOf('Footer Small', module).add(
  'Footer Small',
  () =>
    `<axa-footer-small languageLinks=${languagesAsString} disclaimerLinks="[]" copyrightText="© 2019 AXA Insurance Ltd."></axa-footer-small>`
);
