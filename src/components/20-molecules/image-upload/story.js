/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Molecules/Image upload', module)
  .addDecorator(withMarkdown(Readme))
  .add(
    'Image upload - default',
    () => '<axa-image-upload>Image Upload</axa-image-upload>'
  );
