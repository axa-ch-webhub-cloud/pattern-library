/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

const storyDropdown = storiesOf('Components|Dropdown', module);
storyDropdown.addDecorator(withKnobs);
storyDropdown.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog,
});

storyDropdown.add('Story', () => {
  const label = text('label', '');
  const value = text('value', '');
  const defaultTitle = text('defaulttitle', 'Select amount');
  const name = text('name', '');
  const invalid = boolean('invalid', false);
  const error = text('error', 'This selection is required.');
  const native = boolean('native', false);
  const required = boolean('required', false);
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const dataTestId = text('data-test-id', '');
  const maxHeight = text('max-height', '');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-dropdown
      onchange="console.log('onchange triggered: ', event.detail)"
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
});

storyDropdown.add('Items delayed and numeric values', () => {
  const label = text('label', '');
  const value = text('value', '');
  const name = text('name', '');
  const invalid = boolean('invalid', false);
  const defaultTitle = text('defaulttitle', '');
  const error = text('error', 'Error Message');
  const native = boolean('native', false);
  const required = boolean('required', false);
  const checkMark = boolean('checkmark', false);
  const disabled = boolean('disabled', false);
  const dataTestId = text('data-test-id', '');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-dropdown
      value="${value}"
      label="${label}"
      name="${name}"
      datatestid="${dataTestId}"
      defaulttitle="${defaultTitle}"
      error="${error}"
      ?invalid="${invalid}"
      ?checkmark="${checkMark}"
      ?disabled="${disabled}"
      ?required="${required}"
      ?native="${native}"
    ></axa-dropdown>
  `;

  setTimeout(() => {
    document.querySelector('axa-dropdown').setAttribute(
      'items',
      JSON.stringify([
        { name: 'Item 1', value: '', selected: true },
        { name: 'Item 2', value: 1 },
        { name: 'Item 3', value: 2 },
      ])
    );
  }, 2000);

  render(template, wrapper);
  return wrapper;
});
