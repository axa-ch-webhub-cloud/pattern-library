/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Textarea', module)
  .addDecorator(withMarkdown(Readme))
  .add('Textarea - default', () => '<axa-textarea></axa-textarea>')
  .add('Textarea - label', () => '<axa-textarea label="Label"></axa-textarea>')
  .add('Textarea - placeholder', () => '<axa-textarea placeholder="Placeholder"></axa-textarea>')
  .add('Textarea - disabled', () => '<axa-textarea disabled></axa-textarea>')
  .add(
    'Textarea - value',
    () => '<axa-textarea value="prefilled value" label="Label"></axa-textarea>'
  )

  // required add * if label exist and valid isRequired validation
  .add(
    'Textarea - required',
    () => '<axa-textarea required label="Label"></axa-textarea>'
  )

  .add('Textarea - error', () => {
    const textarea = document.createElement('axa-textarea');
    textarea.error = 'Error Message';
    textarea.valid = false;

    return textarea;
  })

  // show counter if (maxlength && counter) show  show charsLeft if (maxlength)
  .add(
    'Textarea - counter',
    () =>
      `<div>
        <axa-textarea
          style="margin-bottom: 20px;"
          label="Counter with placeholder"
          maxlength="3"
          counter="still ##counter## characters left"
        ></axa-textarea>
      </div>`
  )
  // show counterError if (maxlength && counterError && !areCharsLeft && isInvalid)
  .add(
    'Textarea - counterError',
    () =>
      `<axa-textarea
        label="Counter Error maxlength 3 Characters"
        value="123"
        maxlength="3"
        counterError="The maximum character length has been reached"
      ></axa-textarea>`
  );
