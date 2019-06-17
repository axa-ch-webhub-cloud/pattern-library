/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Textarea', module)
  .addDecorator(withMarkdown(Readme))
  .add('Textarea - default', () => '<axa-textarea>Some children</axa-textarea>')