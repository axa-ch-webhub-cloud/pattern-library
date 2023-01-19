import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAToggleSwitchReact from './AXAToggleSwitchReact';
import ControlledWithOnChange from './ControlledWithOnChange';
import ControlledWithConstantActiveProperty from './ControlledWithConstantActiveProperty';

export default {
  title: 'Examples/Toggle Switch/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const ToggleSwitchControlledWithoutOnChange = () =>
  createReactContainer(<AXAToggleSwitchReact checked={false} />);
export const ToggleSwitchControlledWithOnChange = () =>
  createReactContainer(<ControlledWithOnChange />);
export const ToggleSwitchControlledWithOnChangeListener = () =>
  createReactContainer(<ControlledWithConstantActiveProperty />);
export const ToggleSwitchUncontrolled = () =>
  createReactContainer(<AXAToggleSwitchReact />);
