import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import { createReactContainer } from '../../../../utils/create-react-container';
import DemoButtonLinkClick from './DemoButtonLinkClick';

export default {
  title: 'Examples/Button Link/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const ButtonLinkClickable = () =>
  createReactContainer(<DemoButtonLinkClick />);
