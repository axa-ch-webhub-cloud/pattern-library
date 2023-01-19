import { html } from 'lit';
import { args, argTypes } from './story.args.js';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index.wc.js';

export default {
  title: 'Components/Textarea',
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

export const Textarea = ({
  label,
  name,
  refId,
  placeholder,
  error,
  counter,
  counterMax,
  maxLength,
  checkMark,
  disabled,
  readonly,
  required,
  invalid,
  autocomplete,
}) => html`
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
    ?readonly="${readonly}"
    ?required="${required}"
    ?invalid="${invalid}"
    ?autocomplete="${autocomplete}"
  ></axa-textarea>
`;
