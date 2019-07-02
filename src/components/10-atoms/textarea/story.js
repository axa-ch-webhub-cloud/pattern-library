/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Textarea', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Textarea - default', () => '<axa-textarea></axa-textarea>')
  .add('Textarea - label', () => '<axa-textarea label="Label"></axa-textarea>')
  .add(
    'Textarea - placeholder',
    () => '<axa-textarea placeholder="Placeholder"></axa-textarea>'
  )
  .add('Textarea - disabled', () => '<axa-textarea disabled></axa-textarea>')
  .add(
    'Textarea - required',
    () => '<axa-textarea required label="Label"></axa-textarea>'
  )
  .add(
    'Textarea - checkMark',
    () => '<axa-textarea checkmark></axa-textarea>'
  )
  .add(
    'Textarea - invalid',
    () =>
      '<axa-textarea invalid ></axa-textarea>'
  )
  .add(
    'Textarea - error',
    () =>
      '<axa-textarea invalid error="Error Message"></axa-textarea>'
  )
  .add(
    'Textarea - counter',
    () =>
      `<div>
        <axa-textarea
          maxlength="3"
          counter="still ##counter## characters left"
        ></axa-textarea>
      </div>`
  )
  .add(
    'Textarea - counterMax',
    () =>
      `<axa-textarea
        maxlength="3"
        counterMax="The maximum character length has been reached"
      >123</axa-textarea>`
  )
  .add(
    'Textarea - children (default Value)',
    () => `<axa-textarea>prefilled value</axa-textarea>`
  );
