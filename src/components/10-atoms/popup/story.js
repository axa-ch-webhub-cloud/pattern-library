/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Popup', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Popup - default', () => '<axa-popup>Some children</axa-popup>')
