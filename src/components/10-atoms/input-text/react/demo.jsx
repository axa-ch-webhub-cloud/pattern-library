import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoInputText from './DemoInputText';
import DemoInputTextonKeyDown from './DemoInputTextonKeyDown';
import DemoInputTextonKeyUp from './DemoInputTextonKeyUp';
import DemoInputTextOnPaste from './DemoInputTextOnPaste';

export default {
  title: 'Examples/Input Text/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const InputTextControlledUncontrolled = () =>
  createReactContainer(<DemoInputText />);

export const InputTextOnKeyDownEvent = () =>
  createReactContainer(<DemoInputTextonKeyDown />);

export const InputTextOnKeyUpEvent = () =>
  createReactContainer(<DemoInputTextonKeyUp />);

export const DemoInputTextOnPasteEvent = () =>
  createReactContainer(<DemoInputTextOnPaste />);
