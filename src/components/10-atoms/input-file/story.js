/* global document */
import {
  boolean,
  radios,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Input File',
  decorators: [withKnobs],

  parameters: {
    readme,
    changelog,
  },
};

export const InputFile = () => {
  const _text = text('text', 'Select a File');

  const variant = radios(
    'variant',
    {
      default: '',
      secondary: 'secondary',
      red: 'red',
      inverted: 'inverted',
    },
    ''
  );

  const icon = select('icon', iconList, 'cloud-upload');
  const large = boolean('large', false);
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);

  const accept = text(
    'accept',
    'image/jpg, image/jpeg, application/pdf, image/png'
  );

  const capture = boolean('capture', false);
  const multiple = boolean('multiple', false);

  const template = html`
    <div
      style="${variant.includes('inverted')
        ? `background-color: #00008f; padding: 10px;`
        : ''}"
    >
      <axa-input-file
        variant="${variant}"
        icon="${icon}"
        ?large="${large}"
        ?motionOff="${motionOff}"
        ?disabled="${disabled}"
        accept="${accept}"
        text="${_text}"
        ?capture="${capture}"
        ?multiple="${multiple}"
      ></axa-input-file>
    </div>
  `;

  const wrapper = document.createElement('div');
  render(template, wrapper);

  return wrapper;
};
