import { html, render } from 'lit-html';
import createRefId from '../../../utils/create-ref-id';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Checkbox',
  parameters: {
    readme,
    changelog,
  },
};

export const Checkbox = ({
  checked,
  disabled,
  errortext,
  required,
  styled,
  refId,
  label,
  name,
  variant,
}) => {
  const wrapper = document.createElement('div');
  const template = html`
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
        error="${errortext ? 'Please accept our terms and conditions.' : ''}"
      ></axa-checkbox>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};

Checkbox.story = {
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};
Checkbox.args = {
  checked: true,
  disabled: false,
  errortext: false,
  required: false,
  styled: false,
  refId: `checkbox-${createRefId()}`,
  label: 'I agree to conditions of data protection.',
  name: 'my-checkbox',
  variant: 'square',
};

Checkbox.argTypes = {
  errorText: {
    name: 'error',
  },
  variant: {
    control: {
      type: 'radio',
      options: [
        'square',
        'checkmark',
        // 'inverted-square', // not officially supported yet
        'checkmark-inverted',
      ],
    },
  },
};
