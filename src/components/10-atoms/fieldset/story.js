import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const options = {
  none: null,
  stretch: 'stretch',
  horizontal: 'horizontal',
};

export default {
  title: 'Components/Fieldset',
  parameters: {
    readme,
    changelog,
  },
};

export const Fieldset = ({ error, horizontal }) => {
  const wrapper = document.createElement('div');

  const radioElement = html`
    <axa-checkbox
      label="I agree to conditions of data protection."
      error="Please accept our terms and conditions."
    ></axa-checkbox>
    <axa-checkbox label="I accept the conditions"></axa-checkbox>
    <axa-checkbox
      label="I want to sign up for the newsletter"
      checked
      disabled
    ></axa-checkbox>
  `;

  const template = html`
    <axa-text variant="size-3">
      Resize your browser to a tablet or mobile width to see the effect of
      'horizontal="stretch"'</axa-text
    >
    <br />
    ${horizontal
      ? html`
          <axa-fieldset horizontal="${horizontal}" error="${error}"
            >${radioElement}</axa-fieldset
          >
        `
      : html`
          <axa-fieldset error="${error}">
            ${radioElement}
          </axa-fieldset>
        `}
  `;
  render(template, wrapper);
  return wrapper;
};
Fieldset.args = {
  error: '',
  horizontal: '#',
};

Fieldset.argTypes = {
  horizontal: { control: { type: 'select', options } },
};
