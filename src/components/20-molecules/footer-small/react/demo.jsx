import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoFooterSmallDynamicChildren from './DemoFooterSmallDynamicChildren';

export default {
  title: 'Examples/Footer Small/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const FooterSmallDynamicChildren = () =>
  createReactContainer(<DemoFooterSmallDynamicChildren />);
