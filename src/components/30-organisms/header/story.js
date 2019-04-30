/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Header', module)
  .addDecorator(withMarkdown(Readme))
  .add('Header - default', () => '<axa-header>Some children</axa-header>')