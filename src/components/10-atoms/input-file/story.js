/* global document */
import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Input File',
  parameters: {
    readme,
    changelog,
  },
};

export const InputFile = ({
  text,
  variant,
  icon,
  large,
  motionOff,
  disabled,
  accept,
  capture,
  multiple,
}) => {
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
        text="${text}"
        ?capture="${capture}"
        ?multiple="${multiple}"
      ></axa-input-file>
    </div>
  `;

  const wrapper = document.createElement('div');
  render(template, wrapper);

  return wrapper;
};
InputFile.args = {
  text: 'Select a File',
  variant: '',
  icon: 'cloud-upload',
  large: false,
  motionOff: false,
  disabled: false,
  accept: 'image/jpg, image/jpeg, application/pdf, image/png',
  capture: false,
  multiple: false,
};

InputFile.argTypes = {
  variant: {
    control: {
      type: 'radio',
      options: {
        default: '',
        secondary: 'secondary',
        red: 'red',
        inverted: 'inverted',
      },
    },
  },
  icon: {
    control: {
      type: 'select',
      options: iconList,
    },
  },
};
