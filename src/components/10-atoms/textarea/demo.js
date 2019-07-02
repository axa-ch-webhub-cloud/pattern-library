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
  .add(
    'Feature - Textarea with character counter',
    () =>
      `<div>
        <axa-textarea
          style="display: block; margin-bottom: 20px;"
          label="Character counter with string pattern"
          maxlength="3"
          counter="still ##counter## characters left"
        ></axa-textarea>
        <axa-textarea
          style="display: block; margin-bottom: 20px;"
          label="Character counter without string pattern"
          maxlength="3"
          counter="characters left"
        ></axa-textarea>
        <axa-textarea
          label="Character counter, digits only"
          maxlength="3"
        ></axa-textarea>
      </div>`
  );
