/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Molecules/Policy features/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Without attribute "axastyle"',
    () =>
      '<axa-policy-features><axa-policy-features-item title="Item 1"></axa-policy-features-item></axa-policy-features>'
  )
  .add(
    'With attribute "axastyle" that doesnt exist',
    () =>
      '<axa-policy-features axastyle="thisIsNotInWhitelist">' +
      '<axa-policy-features-item title="Item 1"></axa-policy-features-item>' +
      '</axa-policy-features>'
  )
  .add(
    'With attribute "axastyle" set to "wild-sand"',
    () =>
      '<axa-policy-features axastyle="wild-sand"><axa-policy-features-item title="Item 1"></axa-policy-features-item></axa-policy-features>'
  );
