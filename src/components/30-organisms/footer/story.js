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
        <h2 slot="column-1-title-desktop">axa & you</h2>
        <h2 slot="column-1-title">axa & you</h2>
        <h2 slot="column-2-title-desktop">axa worldwide</h2>
        <h2 slot="column-2-title">axa worldwide</h2>
        <h2 slot="column-3-social-title">stay in touch</h2>
      </axa-footer>`
  );
