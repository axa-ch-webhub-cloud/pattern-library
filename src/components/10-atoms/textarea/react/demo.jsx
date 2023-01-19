import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoControllabilityOfTextarea from './DemoControllabilityOfTextarea';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';

export default {
  title: 'Examples/Textarea/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const ControllabilityOfTextarea = () =>
  createReactContainer(<DemoControllabilityOfTextarea />);
