/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Organisms/Container', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Container - default',
    () => '<axa-container>Some children</axa-container>'
  );
