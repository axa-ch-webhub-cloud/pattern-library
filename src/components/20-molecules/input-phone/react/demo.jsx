import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoInputPhone from './InputPhoneDemo';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';

export default {
  title: 'Examples/Input Phone/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const InputPhoneControlledUncontrolled = () =>
  createReactContainer(<DemoInputPhone />);
