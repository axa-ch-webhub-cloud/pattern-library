/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyInputText = storiesOf('Atoms/Input Text', module);
storyInputText.addDecorator(withKnobs);
storyInputText.addParameters({
  readme: {
    sidebar: Readme,
  },
});

const typeOptions = {
  text: 'text',
  email: 'email',
  password: 'password',
};

storyInputText.add('Input Text', () => {
  const label = text('label*', '');
  const name = text('name*', '');
  const refId = text('refid', '');
  const placeholder = text('placeholder', '');
  const value = text('value', '');
  const error = text('error', '');
  const info = text('info', '');
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const types = radios('type', typeOptions, 'text');
  const maxLength = text('maxlength', '50');
  const counter = text('counter', 'Still ##counter## characters left');
  const counterMax = text('counterMax', 'Over character limit!');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-input-text
      refid="${refId}"
      name="${name}"
      label="${label}"
      placeholder="${placeholder}"
      counter="${counter}"
      countermax="${counterMax}"
      value="${value}"
      type="${types}"
      error="${error}"
      info="${info}"
      maxlength="${maxLength}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?invalid="${invalid}"
    ></axa-input-text>
  `;

  render(template, wrapper);
  return wrapper;
});


storyInputText.add('Input Text - Simulate autocomplete', () => {
  const label = text('label*', '');
  const placeholder = text('placeholder', '');
  const value = text('value', '');
  const error = text('error', '');
  const info = text('info', '');
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const counter = text('counter', 'Still ##counter## characters left');
  const counterMax = text('counterMax', 'Over character limit!');

  const wrapper = document.createElement('div');
  const template = html`
    <form>
      <axa-input-text
        refid="fix-id-fake"
        name="Name"
      ></axa-input-text>
      <axa-input-text
        refid="fix-id-86452623"
        name="Adresse"
        label="${label}"
        placeholder="${placeholder}"
        counter="${counter}"
        countermax="${counterMax}"
        value="${value}"
        type="text"
        error="${error}"
        info="${info}"
        maxlength="5"
        ?checkmark="${checkMark}"
        ?disabled="${disabled}"
        ?required="${required}"
        ?invalid="${invalid}"
      ></axa-input-text>

    </form>
  `;

  render(template, wrapper);

  // simulate autocomplete
  setTimeout(() => {
    const input = document.querySelector('#fix-id-86452623')
    input.value = '123456789';
    if ('createEvent' in document) {
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('input', false, true);
      input.dispatchEvent(evt);
    }
    else {
      input.fireEvent('input');
    }
  }, 1000)

  return wrapper;
});
