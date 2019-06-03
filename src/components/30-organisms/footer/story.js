/* global document */
// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import {
  FacebookSvg,
  InstagramSvg,
  TwitterSvg,
  XingSvg,
  YoutubeSvg,
  LinkedinSvg,
  CaretSvg,
} from '@axa-ch/materials';
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import withBodyReset from '../../../../.storybook/addons/reset-body';
import Readme from './README.md';

// todo delete the following line
import { svg } from 'lit-element';

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
        <h2 slot="column-2-social-title">stay in touch</h2>
      </axa-footer>`
  );
