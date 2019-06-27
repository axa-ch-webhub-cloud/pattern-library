/* global document */
import { storiesOf } from '@storybook/html';
import Readme from './README.md';
import './index';

storiesOf('Atoms/Textarea/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  // show error if (error && (!valid || isInvalid[required && !this.value]) && wasBlurred && wasFocused
  .add('Feature - Textarea error', () => {
    const textarea = document.createElement('axa-textarea');
    textarea.label = 'Valid false should show Error Message';
    textarea.error = 'Error Message';
    textarea.valid = false;

    return textarea;
  })

  .add(
    'Feature - Textarea counter(variants)',
    () =>
      `<div>
        <axa-textarea
          style="display: block; margin-bottom: 20px;"
          label="Counter with placeholder"
          maxlength="3"
          counter="still ##counter## characters left"
        ></axa-textarea>
        <axa-textarea
          style="display: block; margin-bottom: 20px;"
          label="Counter without placeholder"
          maxlength="3"
          counter="characters left"
        ></axa-textarea>
        <axa-textarea
          label="Counter without text"
          maxlength="3"
        ></axa-textarea>
      </div>`
  );
