/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Molecules/Policy features', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Policy features - default', () => '<axa-policy-features>Some children</axa-policy-features>')