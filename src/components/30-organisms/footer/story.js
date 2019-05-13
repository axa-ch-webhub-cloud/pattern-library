/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Footer', module)
  .addDecorator(withMarkdown(Readme))
  .add('Footer - default', () => '<axa-footer>Some children</axa-footer>')