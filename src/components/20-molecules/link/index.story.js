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
  )
  .add('Decorated link', () => `<axa-link href="https://axa.ch/en/private-customers.html" deco>Red Link</axa-link>`)
  .add('Link static arrow left', () => `<axa-link href="https://axa.ch/en/private-customers.html" arrowLeft>Arrow Left Link</axa-link>`)
  .add('Link static arrow right', () => `<axa-link href="https://axa.ch/en/private-customers.html" arrowRight>Arrow Right Link</axa-link>`)
  .add('Bold', () => `<axa-link href="https://axa.ch/en/private-customers.html" bold>Bold Link</axa-link>`)
  .add('External Source', () => `<axa-link href="https://axa.ch/en/private-customers.html" external>External Link</axa-link>`);
