import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoCallbacks from './DemoCallbacks';
import DemoResizeDynamic from './DemoResizeDynamic';

export default {
  title: 'Examples/Footer/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
    layout: 'fullscreen',
  },
};

export const Callbacks = () => createReactContainer(<DemoCallbacks />);
export const ResizeDynamic = () => createReactContainer(<DemoResizeDynamic />);
