/* global document */
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

storiesOf('Examples/Textarea/Pure HTML', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme,
    changelog,
  })
  .add(
    'Character counter',
    () =>
      `<div>
        <axa-textarea
          style="display: block; margin-bottom: 20px;"
          label="Character counter with string pattern"
          maxlength="3"
          counter="still ##counter## characters left"
          countermax="character limit reached"
          checkmark
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
  )
  .add(
    'Children (default Value)',
    () => `<axa-textarea>prefilled value</axa-textarea>`
  )
  .add('MaxLength added later', () => {
    const label = text('label*', '');
    const name = text('name*', '');
    const refId = text('refId', '');
    const placeholder = text('placeholder', '');
    const error = text('error', '');
    const checkMark = boolean('checkmark', false);
    const disabled = boolean('disabled', false);
    const required = boolean('required', false);
    const invalid = boolean('invalid', false);

    const wrapper = document.createElement('div');
    const template = html`
      <axa-textarea
        refid="${refId}"
        name="${name}"
        label="${label}"
        placeholder="${placeholder}"
        error="${error}"
        ?checkmark="${checkMark}"
        ?disabled="${disabled}"
        ?required="${required}"
        ?invalid="${invalid}"
      ></axa-textarea>
    `;

    setTimeout(() => {
      document
        .querySelector('axa-textarea')
        .setAttribute('counter', 'Still ##counter## left');
      document.querySelector('axa-textarea').setAttribute('maxLength', 100);
      document
        .querySelector('axa-textarea')
        .setAttribute('countermax', 'Max maxLength reached');
    }, 2000);

    render(template, wrapper);
    return wrapper;
  });
