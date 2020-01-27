/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';
import createRefId from '../../../utils/create-ref-id';

const storyCheckbox = storiesOf('Components|Atoms/Checkbox', module);
storyCheckbox.addDecorator(withKnobs);
storyCheckbox.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog,
});

storyCheckbox.add('Checkbox', () => {
  const refId = text('refId', `checkbox-${createRefId()}`);
  const label = text('label', 'I agree to conditions of data protection.');
  const name = text('name', 'my-checkbox');
  const variant = select('variant', ['square', 'checkmark']);
  const checked = boolean('checked', true);
  const disabled = boolean('disabled', false);
  const errortext = boolean('error', false);
  const required = boolean('required', false);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-checkbox
      refId="${refId}"
      class="hover"
      name="${name}"
      variant="${variant}"
      label="${label}"
      ?disabled="${disabled}"
      ?checked="${checked}"
      ?required="${required}"
      error="${errortext ? 'Please accept our terms and conditions.' : ''}"
    ></axa-checkbox>
  `;

  render(template, wrapper);
  return wrapper;
});
