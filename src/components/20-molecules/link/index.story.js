/* global document */
import { storiesOf } from '@storybook/html';
import './index';

storiesOf('Link', module)
  .add('Unstyled link', () => `<axa-link href="https://axa.ch/en/private-customers.html">This simple link just links</axa-link>`)
  .add('Red link', () => `<axa-link href="https://axa.ch/en/private-customers.html" color="red">Red Link</axa-link>`)
  .add(
    'White link',
    () =>
      `<style>body{background-color: blue;}</style><axa-link href="https://axa.ch/en/private-customers.html" color="white">White Link</axa-link>`
  );
