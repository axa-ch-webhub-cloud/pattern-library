/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../icon/icon-list';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAButton from './AXAButton';
import DemoButtonClick from './DemoButtonClick';
import DemoButtonForm from './DemoButtonForm';

const variantOptions = {
  default: '',
  red: 'red',
  secondary: 'secondary',
  inverted: 'inverted',
  'Inverted-blue-ocean': 'inverted-blue-ocean',
  'inverted-red-tosca': 'inverted-red-tosca',
  'inverted-purple-logan': 'inverted-purple-logan',
  'inverted-green-viridian': 'inverted-green-viridian',
  'inverted-blue-teal': 'inverted-blue-teal',
};

const sizeOptions = {
  default: '',
  large: 'large',
  small: 'small',
};

const typesOptions = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

const invertedBgs = {
  inverted: '#00008f',
  'inverted-blue-ocean': '#4976ba',
  'inverted-red-tosca': '#914146',
  'inverted-purple-logan': '#9190ac',
  'inverted-green-viridian': '#668980',
  'inverted-blue-teal': '#027180',
};

export default {
  title: 'Examples/Button/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({
  buttonText,
  variants,
  sizes,
  icons,
  motionOff,
  disabled,
  types,
}) => {
  const wrapper = document.createElement('div');
  ReactDOM.render(
    <div style={{ backgroundColor: invertedBgs[variants], padding: '10px' }}>
      <AXAButton
        type={types}
        variant={variants}
        className="myCssClass"
        size={sizes}
        icon={icons}
        disabled={disabled}
        motionOff={motionOff}
      >
        {buttonText}
      </AXAButton>
    </div>,
    wrapper
  );

  return wrapper;
};

Story.args = {
  buttonText: 'Calculate Premium',
  variants: '',
  sizes: '',
  icons: '',
  motionOff: false,
  disabled: false,
  types: 'button',
};

Story.argTypes = {
  buttonText: {
    name: 'set button content',
  },
  variants: {
    name: 'variant',
    control: { type: 'radio', options: variantOptions },
  },
  sizes: {
    name: 'size',
    control: { type: 'radio', options: sizeOptions },
  },
  icons: {
    name: 'icon',
    control: { type: 'select', options: iconList },
  },
  types: {
    name: 'type',
    control: { type: 'select', options: typesOptions },
  },
};

export const Clickable = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButtonClick />, div);
  return div;
};

export const InAForm = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoButtonForm />, div);
  return div;
};
