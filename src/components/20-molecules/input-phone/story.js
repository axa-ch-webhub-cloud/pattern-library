import { text, select, boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit';
import './index';
import changelog from './CHANGELOG.md';
import readme from './README.md';

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    readme,
    changelog,
  },
};

export const InputPhone = () => {
  const lang = select('lang', ['de', 'en', 'it', 'fr'], 'de');
  const label = text('label', 'Phone Number');
  const error = text('error', 'Invalid phone number');
  const countrycode = text('countrycode', '+41');
  const value = text('value', '');
  const disabled = boolean('disabled', false);
  const countryflags = boolean('countryflags', false);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-input-phone
      lang="${lang}"
      label="${label}"
      error="${error}"
      countrycode="${countrycode}"
      value="${value}"
      ?disabled="${disabled}"
      ?countryflags="${countryflags}"
    ></axa-input-phone>
  `;

  render(template, wrapper);
  return wrapper;
};
