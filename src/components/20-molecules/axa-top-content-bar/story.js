/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Molecules/Axa top content bar', module)
  .addDecorator(withMarkdown(Readme))
  .add('Axa top content bar - default', () => '<axa-axa-top-content-bar>Some children</axa-axa-top-content-bar>')