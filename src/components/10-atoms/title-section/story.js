/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Title section', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Title section',
    () => '<axa-title-section>This is a section title</axa-title-section>'
  )
  .add(
    'Title section White',
    () =>
      `<article style="background: #00008f; padding: 50px; 100px;">
        <axa-title-section variant="white">This is the section title in white to be used on backgrounds</axa-title-section>
      </article>`
  );
