/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Popup content', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Popup content - default', () => '<axa-popup-content>Some children</axa-popup-content>')