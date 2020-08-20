import { select, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme,
    },
    changelog: Changelog,
  },
};

export const Fieldset = () => {
  const error = text('error', '');
  const options = {
    none: null,
    stretch: 'stretch',
    horizontal: 'horizontal',
  };
  const horizontal = select('horizontal', options);

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
