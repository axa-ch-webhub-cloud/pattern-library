/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Input text', module)
  .addDecorator(withMarkdown(Readme))
  .add('Input text - default', () => '<axa-input-text>Some children</axa-input-text>')