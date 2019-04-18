/* global document */
import { storiesOf } from '@storybook/html';
import './index';

import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Link', module)
  .addDecorator(withMarkdown(Readme))
  .add('Unstyled link', () => `<axa-link href="https://axa.ch/en/private-customers.html">This simple link just links</axa-link>`)
  .add('Red link', () => `<axa-link href="https://axa.ch/en/private-customers.html" color="red">Red Link</axa-link>`)
  .add('White link', () => `<style>body{background-color: blue;}</style><axa-link href="https://axa.ch/en/private-customers.html" color="white">White Link</axa-link>`)
  .add('Decorated', () => `<axa-link href="https://axa.ch/en/private-customers.html" deco>Decorated Link</axa-link>`)
  .add('Bold', () => `<axa-link href="https://axa.ch/en/private-customers.html" bold>Bold Link</axa-link>`)
  .add('External Link', () => `<axa-link href="https://axa.ch/en/private-customers.html" external>External Link</axa-link>`)
  .add('Static Arrow Left', () => `<axa-link href="https://axa.ch/en/private-customers.html" arrowleft>Arrow Left Link</axa-link>`)
  .add('Static Arrow Right', () => `<axa-link href="https://axa.ch/en/private-customers.html" arrowright>Arrow Right Link</axa-link>`)
  .add('Animated Arrow Left', () => `<axa-link href="https://axa.ch/en/private-customers.html" motion arrowleft>Motion Link Left</axa-link>`)
  .add('Animated Arrow Right', () => `<axa-link href="https://axa.ch/en/private-customers.html" motion arrowright>Motion Link Right</axa-link>`);
