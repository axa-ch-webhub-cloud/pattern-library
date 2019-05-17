/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Container', module)
  .addDecorator(withMarkdown(Readme))
  .add('Container - default', () => '<axa-container>Some children</axa-container>')