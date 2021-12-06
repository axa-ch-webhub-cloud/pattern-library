import { text, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const InputPhone = () => {
  const lang = select('lang', ['de', 'en', 'it', 'fr'], 'en');
  const label = text('label', 'Phone Number');
  const errorprefix = text('errorprefix', 'Invalid Phone Number');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-input-phone
      lang="${lang}"
      label="${label}"
      errorprefix="${errorprefix}"
    ></axa-input-phone>
  `;

  render(template, wrapper);
  return wrapper;
};
