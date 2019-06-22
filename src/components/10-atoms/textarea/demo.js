/* global document */
import { storiesOf } from '@storybook/html';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';
import './index';

storiesOf('Atoms/Textarea/Demos', module)
  .addDecorator(withMarkdown(Readme))

  // show error if (error && (!valid || isInvalid[required && !this.value]) && wasBlurred && wasFocused
  .add('Feature - Textarea error states', () => {
    const container = document.createElement('div');
    const textarea = document.createElement('axa-textarea');
    textarea.label = 'Validation - valid attr (onBlur -> Error Message)';
    textarea.error = 'Error Message';
    textarea.valid = false;
    textarea.style.marginBottom = '20px';
    const textareaRequired = document.createElement('axa-textarea');
    textareaRequired.label =
      'Validation - required attr (onBlur -> Error Message)';
    textareaRequired.required = true;
    container.appendChild(textarea);
    container.appendChild(textareaRequired);

    return container;
  })

  .add(
    'Feature - Textarea counter (variants)',
    () =>
      `<div>
        <axa-textarea
          style="margin-bottom: 20px;"
          label="Counter with placeholder"
          maxlength="3"
          counter="still ##counter## characters left"
        ></axa-textarea>
        <axa-textarea
          style="margin-bottom: 20px;"
          label="Counter without placeholder"
          maxlength="3"
          counter="characters left"
        ></axa-textarea>
        <axa-textarea
          style="margin-bottom: 20px;"
          label="Counter without text"
          maxlength="3"
        ></axa-textarea>
      </div>`
  );
