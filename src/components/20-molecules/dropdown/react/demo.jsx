/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
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
