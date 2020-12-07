/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoUncontrolledDropdownReact from './DemoUncontrolledDropdownReact';
import DemoDropdownReact from './DemoDropdownReact';
import DemoDropdownVersionedReact from './DemoDropdownVersionedReact';
import DemoFocussableDropdownReact from './DemoFocussableDropdownReact';
import DemoManyOptionsDropdownReact from './DemoManyOptionsReact';

export default {
  title: 'Examples/Dropdown/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({
  label,
  value,
  defaultTitle,
  name,
  invalid,
  error,
  native,
  required,
  checkMark,
  disabled,
  maxHeight,
  item1,
  item2,
  item3,
}) => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DemoUncontrolledDropdownReact
      item1={item1}
      item2={item2}
      item3={item3}
      label={label}
      value={value}
      defaultTitle={defaultTitle}
      name={name}
      invalid={invalid}
      error={error}
      native={native}
      required={required}
      checkMark={checkMark}
      disabled={disabled}
      maxHeight={maxHeight}
    />,
    div
  );
  return div;
};

Story.args = {
  label: '',
  value: '',
  item1: '< CHF 1,000", "value": "Item 1',
  item2: 'From CHF 1,000 to 10,0000", "value": "Item 2',
  item3: '> CHF 10,000", "value": "Item 3',
  defaultTitle: 'Select amount',
  name: '',
  invalid: false,
  error: 'This selection is required.',
  native: false,
  required: false,
  checkMark: false,
  disabled: false,
  dataTestId: '',
  maxHeight: '',
};

Story.argTypes = {
  item1: { name: 'set first item' },
  item2: { name: 'set second item' },
  item3: { name: 'set third item' },
};

export const Focussable = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoFocussableDropdownReact />, div);
  return div;
};

export const ManyOptions = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoManyOptionsDropdownReact />, div);
  return div;
};

export const ReactComponent = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDropdownReact />, div);
  return div;
};

export const VersionedReactComponent = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoDropdownVersionedReact />, div);
  return div;
};
