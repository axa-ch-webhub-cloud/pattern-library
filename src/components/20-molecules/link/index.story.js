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
  .add('Decorated', () => `<axa-link href="https://axa.ch/en/private-customers.html" deco>Red Link</axa-link>`)
  .add('Bold', () => `<axa-link href="https://axa.ch/en/private-customers.html" bold>Bold Link</axa-link>`)
  .add('External Link', () => `<axa-link href="https://axa.ch/en/private-customers.html" external>External Link</axa-link>`)
  .add('Static Arrow Left', () => `<axa-link href="https://axa.ch/en/private-customers.html" arrowLeft>Arrow Left Link</axa-link>`)
  .add('Static Arrow Right', () => `<axa-link href="https://axa.ch/en/private-customers.html" arrowRight>Arrow Right Link</axa-link>`)
  .add(
    'Animated Arrow Right',
    () => `<axa-link href="https://axa.ch/en/private-customers.html" motion arrowRight>Motion Link Right</axa-link>`
  )
  .add(
    'Animated Arrow Left',
    () => `<axa-link href="https://axa.ch/en/private-customers.html" motion arrowLeft>Motion Link Left</axa-link>`
  );
