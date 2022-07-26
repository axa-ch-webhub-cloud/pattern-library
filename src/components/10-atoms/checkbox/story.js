import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Checkbox',
  parameters: {
    readme,
    usage: {
      propsPureHTML: `label="I'm a checkbox"`,
      propsReact: `onChange={() => alert("you interacted with me")} label="I'm a checkbox" defaultChecked`,
    },
    changelog,
  },
  args,
  argTypes,
};

export const Checkbox = ({
  refId,
  label,
  name,
  variant,
  checked,
  disabled,
  error,
  required,
  styled,
}) =>
  html`
    <div
      style="${variant && variant.includes('inverted')
        ? `background-color: #027180; padding: 10px;`
        : ''}"
    >
      <axa-checkbox
        refId="${refId}"
        class="hover"
        name="${name}"
        variant="${variant}"
        label="${label}"
        ?disabled="${disabled}"
        ?checked="${checked}"
        ?required="${required}"
        ?styled="${styled}"
        error="${error}"
      ></axa-checkbox>
    </div>
  `;
