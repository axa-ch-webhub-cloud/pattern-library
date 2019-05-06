/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Molecules/Image upload', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Image upload - default',
    () => `<div style="width:440px;">
    <axa-image-upload></axa-image-upload>
    </div>`
  );
