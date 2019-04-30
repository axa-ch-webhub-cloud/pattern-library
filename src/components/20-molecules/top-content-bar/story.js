/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Molecules/Top content bar', module)
  .addDecorator(withMarkdown(Readme))
  .add('Top content bar - default', () => '<axa-top-content-bar>Some children</axa-top-content-bar>')