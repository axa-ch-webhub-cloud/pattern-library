import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoControlledRadioButtonReact from './DemoRadioButtonReact';

export default {
  title: 'Examples/Radio/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const RadioButtonControlled = () =>
  createReactContainer(<DemoControlledRadioButtonReact />);
