import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Dropdown',
  parameters: {
    readme,
    changelog,
  },
};

export const DropdownUncontrolled = ({
  label,
  value,
  defaultTitle,
  name,
  invalid,
  error,
  native,
  required,
  checkMark,
  disabled,
  dataTestId,
  maxHeight,
}) => {
  const handleChange = e => {
    const { target, detail } = e;
    target.dataset.change = JSON.stringify(detail);
  };

  const wrapper = document.createElement('div');
  const template = html`
    <axa-dropdown
      @change="${handleChange}"
      defaulttitle="${defaultTitle}"
      value="${value}"
      label="${label}"
      name="${name}"
      datatestid="${dataTestId}"
      error="${error}"
      maxheight="${maxHeight}"
      ?invalid="${invalid}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?native="${native}"
      items='[
        {"name": "< CHF 1,000", "value": "Item 1" },
        {"name": "From CHF 1,000 to 10,0000", "value": "Item 2" },
        {"name": "> CHF 10,000", "value": "Item 3" }
     ]'
    ></axa-dropdown>
  `;

  render(template, wrapper);
  return wrapper;
};

DropdownUncontrolled.args = {
  label: '',
  value: '',
  defaultTitle: 'Select amount',
  name: '',
  invalid: false,
  error: 'A selection is required.',
  native: false,
  required: false,
  checkMark: false,
  disabled: false,
  dataTestId: '',
  maxHeight: '',
};
