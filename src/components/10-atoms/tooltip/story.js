/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Tooltip', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Tooltip - default', () => '<axa-tooltip>Some children</axa-tooltip>')