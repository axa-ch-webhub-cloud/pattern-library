import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Textarea',
  parameters: {
    readme,
    changelog,
  },
};

export const Textarea = ({
  label,
  name,
  refId,
  placeholder,
  error,
  checkMark,
  disabled,
  required,
  invalid,
  counter,
  counterMax,
  maxLength,
}) => {
  const wrapper = document.createElement('div');
  const template = html`
    <axa-textarea
      refid="${refId}"
      name="${name}"
      label="${label}"
      placeholder="${placeholder}"
      error="${error}"
      counter="${counter}"
      countermax="${counterMax}"
      maxlength="${maxLength}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?invalid="${invalid}"
    ></axa-textarea>
  `;

  render(template, wrapper);
  return wrapper;
};
Textarea.args = {
  label: 'Please describe the course of events',
  name: '',
  refId: '',
  placeholder: '',
  error: '',
  checkMark: false,
  disabled: false,
  required: false,
  invalid: false,
  counter: '',
  counterMax: '',
  maxLength: '',
};
