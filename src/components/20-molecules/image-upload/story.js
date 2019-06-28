/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Molecules/Image upload', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Image upload - default',
    () =>
      `<div style="width:453px;"><axa-image-upload>Folgende Dateien werden übertragen</axa-image-upload></div>`
  );
