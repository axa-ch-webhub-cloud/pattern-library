/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Popup button', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Popup button - default', () => '<axa-popup-button>Some children</axa-popup-button>')