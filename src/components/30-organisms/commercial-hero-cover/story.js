/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Organisms/Commercial hero cover', module)
  .addDecorator(withMarkdown(Readme))
  .add('Commercial hero cover - default', () => '<axa-commercial-hero-cover>Some children</axa-commercial-hero-cover>')