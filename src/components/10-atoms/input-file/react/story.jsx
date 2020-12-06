/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { iconList } from '../../icon/icon-list';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAInputFileReact from './AXAInputFileReact';
import AXATextReact from './AXATextReact';

export default {
  title: 'Examples/Input File/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({
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
  const div = document.createElement('div');

  if (variant.includes('inverted')) {
    div.style.backgroundColor = '#00008f';
    div.style.padding = '10px';
  }

  ReactDOM.render(
    <>
      <AXAInputFileReact
        text={text}
        variant={variant}
        onChange={e => {
          const allFileNames = [];
          [...e.target.files].forEach(i => allFileNames.push(i.name));

          document.getElementById(
            'checkbox-output'
          ).innerHTML = `Files selected: ${allFileNames.toString()}`;
        }}
        className="myCssClass"
        icon={icon}
        large={large}
        motionOff={motionOff}
        multiple={multiple}
        accept={accept}
        disabled={disabled}
        capture={capture}
      />
      <br />
      <AXATextReact id="checkbox-output">File selected:</AXATextReact>
    </>,
    div
  );

  return div;
};

Story.args = {
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

Story.argTypes = {
  text: {
    name: 'set input-file content',
  },
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
