import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoTextReact from './DemoTextReact';
import DemoTextReactVersioned from './DemoTextReactVersioned';

export default {
  title: 'Examples/Text/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const TextDynamicChildren = () =>
  createReactContainer(<DemoTextReact />);

export const TextCustomVersioned = () =>
  createReactContainer(<DemoTextReactVersioned />);
