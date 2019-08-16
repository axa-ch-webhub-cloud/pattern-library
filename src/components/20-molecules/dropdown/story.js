/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyDropdown = storiesOf('Molecules/Dropdown', module);
storyDropdown.addDecorator(withKnobs);
storyDropdown.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyDropdown.add('Dropdown', () => {
  const label = text('label', '');
  const value = text('value', '');
  const defaultTitle = text('defaulttitle', 'Please Select');
  const name = text('name', '');
  const invalid = boolean('invalid', false);
  const error = text('error', 'Error Message');
  const native = boolean('native', false);
  const required = boolean('required', false);
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const dataTestId = text('data-test-id', '');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-dropdown
      defaultTitle="${defaultTitle}"
      value="${value}"
      label="${label}"
      name="${name}"
      dataTestId="${dataTestId}"
      error="${error}"
      ?invalid="${invalid}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?native="${native}"
      items='[
        {"name": "Item 1", "value": "Item 1" },
        {"name": "Item 2", "value": "Item 2" },
        {"name": "Item 3", "value": "Item 3" }
     ]'
    ></axa-dropdown>
  `;

  render(template, wrapper);
  return wrapper;
});
