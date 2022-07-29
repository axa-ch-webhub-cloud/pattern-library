import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

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
  ></axa-textarea>
`;
