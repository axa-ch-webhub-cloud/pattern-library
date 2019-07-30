/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Organisms/Testimonials', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Testimonials - default', () => '<axa-testimonials>Some children</axa-testimonials>')