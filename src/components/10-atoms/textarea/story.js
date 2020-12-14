import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Textarea',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      disabled: false,
      componentName: 'textarea',
      propsReact: 'onChange={handleChange}',
    },
    changelog,
  },
};

export const Textarea = () => {
  const label = text('label*', 'Please describe the course of events');
  const name = text('name*', '');
  const refId = text('refId', '');
  const placeholder = text('placeholder', '');
  const error = text('error', '');
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const counter = text('counter', '');
  const counterMax = text('countermax', '');
  const maxLength = text('maxlength', '');

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
