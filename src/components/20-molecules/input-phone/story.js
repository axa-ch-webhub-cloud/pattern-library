import { text, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
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
  const errorprefix = text('errorprefix', 'Invalid Phone Number');
  const areavalue = text('areavalue', '+41');
  const phonevalue = text('phonevalue', '');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-input-phone
      lang="${lang}"
      label="${label}"
      errorprefix="${errorprefix}"
      areavalue="${areavalue}"
      phonevalue="${phonevalue}"
    ></axa-input-phone>
  `;

  render(template, wrapper);
  return wrapper;
};
