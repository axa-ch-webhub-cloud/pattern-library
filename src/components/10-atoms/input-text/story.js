import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Input Text',
  parameters: {
    readme,
    changelog,
  },
};

const typeOptions = {
  text: 'text',
  email: 'email',
  password: 'password',
};

export const InputText = ({
  label,
  name,
  refId,
  placeholder,
  value,
  error,
  info,
  checkMark,
  disabled,
  required,
  invalid,
  types,
  maxLength,
  counter,
  counterMax,
  pattern,
  inputmode,
  currency,
  autofocus,
}) => {
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
      currency="${currency}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?invalid="${invalid}"
      ?autofocus="${autofocus}"
    ></axa-input-text>
  `;

  render(template, wrapper);
  return wrapper;
};
InputText.args = {
  label: '', // TODO set required
  name: '', // TODO set required
  refId: '',
  placeholder: '',
  value: '',
  error: '',
  info: '',
  checkMark: false,
  disabled: false,
  required: false,
  invalid: false,
  types: 'text',
  maxLength: 50,
  counter: 'Still ##counter## characters left',
  counterMax: 'Over character limit!',
  pattern: '',
  inputmode: '',
  autofocus: false,
};

InputText.argTypes = {
  types: { control: { type: 'radio', options: typeOptions } },
};
