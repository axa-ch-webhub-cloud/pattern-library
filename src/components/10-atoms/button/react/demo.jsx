import React from 'react';
import readme from '../README.md';
import changelog from '../CHANGELOG.md';
import { createReactContainer } from '../../../../utils/create-react-container';
import DemoButtonClick from './DemoButtonClick';
import DemoButtonForm from './DemoButtonForm';

export default {
  title: 'Examples/Button/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const ButtonClickable = () => createReactContainer(<DemoButtonClick />);
export const ButtonInAForm = () => createReactContainer(<DemoButtonForm />);
