/* global document */
// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import withBodyReset from '../../../../.storybook/addons/reset-body';
import Readme from './README.md';

storiesOf('Organisms/Footer', module)
  .addDecorator(withMarkdown(Readme))
  .addDecorator(withBodyReset())
  .add(
    'Footer',
    () =>
      `
      <axa-footer>
        <h2 slot="column-0-title-desktop">axa & you</h2>
        <h2 slot="column-0-title">axa & you</h2>
        <a slot="column-0-item-0" href="https://axa.ch/en/private-customers.html" target="_blank">Contact</a>
        <a slot="column-0-item-1" href="https://axa.ch/en/private-customers.html" target="_blank">Report a claim</a>
        <a slot="column-0-item-2" href="https://axa.ch/en/private-customers.html" target="_blank">Broker</a>
        <a slot="column-0-item-3" href="https://axa.ch/en/private-customers.html" target="_blank">Job vacancies</a>
        <a slot="column-0-item-4" href="https://axa.ch/en/private-customers.html" target="_blank">MyAXA</a>
        <a slot="column-0-item-5" href="https://axa.ch/en/private-customers.html" target="_blank">Customer reviews</a>
        <a slot="column-0-item-6" href="https://axa.ch/en/private-customers.html" target="_blank">Garage Portal</a>
        <h2 slot="column-1-title-desktop">axa worldwide</h2>
        <h2 slot="column-1-title">axa worldwide</h2>
        <a slot="column-1-item-0" href="https://axa.ch/en/private-customers.html" target="_blank">AXA worldwide</a>
        <h2 slot="column-2-social-title">stay in touch</h2>
        <a slot="column-social-item-0" href="https://www.facebook.com/axach/" target="_blank">facebook</a>
        <a slot="column-social-item-1" href="https://www.instagram.com/axaswitzerland/" target="_blank">instagram</a>
        <a slot="column-social-item-2" href="https://twitter.com/axa_schweiz" target="_blank">twitter</a>
        <a slot="column-social-item-3" href="https://www.xing.com/companies/AXAWINTERTHUR" target="_blank">xing</a>
        <a slot="column-social-item-4" href="https://www.youtube.com/axaschweiz" target="_blank">youtube</a>
        <a slot="column-social-item-5" href="https://www.linkedin.com/company/axa/" target="_blank">linkedin</a>
      </axa-footer>`
  );
