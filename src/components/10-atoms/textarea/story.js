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
    'Textarea - validation',
    () => '<axa-textarea validation></axa-textarea>'
  )
  .add('Textarea - error', () => {
    const textarea = document.createElement('axa-textarea');
    textarea.error = 'Error Message';
    textarea.valid = false;

    return textarea;
  })
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
