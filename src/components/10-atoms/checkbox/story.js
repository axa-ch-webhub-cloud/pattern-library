/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyCheckbox = storiesOf('Atoms/Checkbox', module);
storyCheckbox.addDecorator(withKnobs);
storyCheckbox.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyCheckbox.add('Checkbox', () => {
  const label = text('label', 'this is a label');
  const name = text('name', 'my-checkbox');
  const checked = boolean('checked', true);
  const disabled = boolean('disabled', false);
  const errortext = boolean('error', false);
  const required = boolean('required', false);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-checkbox
      class="hover"
      name="${name}"
      label="${label}"
      ?disabled="${disabled}"
      ?checked="${checked}"
      ?required="${required}"
      onchange='console.log("checkbox", this.name, " changed to: ", this.checked)'
      error="${errortext
        ? 'Bitte akzeptieren Sie die allgemeinen Versicherungsbedingungen.'
        : ''}"
    >
    </axa-checkbox>
  `;

  render(template, wrapper);
  return wrapper;
});
