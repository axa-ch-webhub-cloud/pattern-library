import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import { args, argTypes } from '../story.args.js';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoUncontrolledDropdownReact from './DemoUncontrolledDropdownReact';

export default {
  title: 'Examples/Dropdown/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args: {
    firstItem: '< CHF 1,000',
    secondItem: 'From CHF 1,000 to 10,000',
    thirdItem: '> CHF 10,000',
    defaultTitle: 'Please Select',
    ...args,
  },
  argTypes: {
    firstItem: {
      control: 'text',
    },
    secondItem: {
      control: 'text',
    },
    thirdItem: {
      control: 'text',
    },
    defaultTitle: {
      control: 'text',
    },
    ...argTypes,
  },
};

export const DropdownUncontrolled = ({
  firstItem,
  secondItem,
  thirdItem,
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
  maxheight,
}) =>
  createReactContainer(
    <DemoUncontrolledDropdownReact
      item1={firstItem}
      item2={secondItem}
      item3={thirdItem}
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
      maxHeight={maxheight}
    />
  );
