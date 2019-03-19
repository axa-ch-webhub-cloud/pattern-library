/* global document */
import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Link', module).add(
  'Unstyled link',
  () => `<axa-link href="https://axa.ch/en/private-customers.html">This simple link just links</axa-link>`
);
