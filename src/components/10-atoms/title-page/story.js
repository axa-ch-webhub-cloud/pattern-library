/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Title page', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Title page - default',
    () => '<axa-title-page>Some children</axa-title-page>'
  );
