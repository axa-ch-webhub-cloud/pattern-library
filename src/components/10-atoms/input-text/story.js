/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

const storyInputText = storiesOf('Components|Input Text', module);
storyInputText.addDecorator(withKnobs);
storyInputText.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog,
});

const typeOptions = {
  text: 'text',
  email: 'email',
  password: 'password',
};

storyInputText.add('Story', () => {
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
  const pattern = text('pattern', '');
  const inputmode = text('inputmode', '');
  const autofocus = boolean('autofocus', false);

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
      pattern="${pattern}"
      inputmode="${inputmode}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?invalid="${invalid}"
      ?autofocus="${autofocus}"
    ></axa-input-text>
  `;

  render(template, wrapper);
  return wrapper;
});
