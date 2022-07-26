import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Dropdown',
  parameters: {
    readme,
    usage: {
      propsPureHTML: `items='[{"name": "Item A", "value": "Item 1" }]'`,
      propsReact: `items={[{ name: 'Item 1', value: 'Item 1' }]}`,
    },
    changelog,
  },
  args,
  argTypes,
};

export const Dropdown = ({
  defaultTitle,
  value,
  label,
  name,
  datatestid,
  error,
  maxheight,
  invalid,
  checkMark,
  disabled,
  required,
  native,
  cropText,
  showValue,
}) => {
  const handleChange = e => {
    const { target, detail } = e;
    target.dataset.change = JSON.stringify(detail);
  };

  return html`
    <axa-dropdown
      @change="${handleChange}"
      defaulttitle="${defaultTitle}"
      value="${value}"
      label="${label}"
      name="${name}"
      datatestid="${datatestid}"
      error="${error}"
      maxheight="${maxheight}"
      ?invalid="${invalid}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?native="${native}"
      ?croptext="${cropText}"
      ?showvalue="${showValue}"
      items='[
        {"name": "< CHF 1,000", "value": "Item 1" },
        {"name": "From CHF 1,000 to 10,0000", "value": "Item 2" },
        {"name": "> CHF 10,000", "value": "Item 3" }
     ]'
    ></axa-dropdown>
  `;
};
