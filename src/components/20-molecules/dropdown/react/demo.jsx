import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoDropdownReact from './DemoDropdownReact';
import DemoFocussableDropdownReact from './DemoFocussableDropdownReact';
import DemoManyOptionsDropdownReact from './DemoManyOptionsReact';

export default {
  title: 'Examples/Dropdown/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const DropdownFocusable = () =>
  createReactContainer(<DemoFocussableDropdownReact />);

export const DropdownManyOptions = () =>
  createReactContainer(<DemoManyOptionsDropdownReact />);

export const DropdownReactComponent = () =>
  createReactContainer(<DemoDropdownReact />);
