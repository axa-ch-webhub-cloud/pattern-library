import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Input Text',
  parameters: {
    readme,
    usage: {
      propsReact: 'onChange={handleChange}',
    },
    changelog,
  },
  args,
  argTypes,
};

export const InputText = ({
  refId,
  name,
  label,
  placeholder,
  counter,
  counterMax,
  value,
  type,
  error,
  info,
  maxLength,
  pattern,
  inputmode,
  currency,
  checkMark,
  disabled,
  required,
  invalid,
  autofocus,
}) => html`
  <axa-input-text
    refid="${refId}"
    name="${name}"
    label="${label}"
    placeholder="${placeholder}"
    counter="${counter}"
    countermax="${counterMax}"
    value="${value}"
    type="${type}"
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
