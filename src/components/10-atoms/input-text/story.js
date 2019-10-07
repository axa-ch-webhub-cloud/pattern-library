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
      maxlength="${maxLength}"
      counter="${counter}"
      countermax="${counterMax}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?invalid="${invalid}"
      value="${value}"
      type="${types}"
      error="${error}"
      info="${info}"
    ></axa-input-text>
  `;

  render(template, wrapper);
  return wrapper;
});
