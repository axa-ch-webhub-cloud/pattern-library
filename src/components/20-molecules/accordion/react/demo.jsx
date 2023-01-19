import React from 'react';
import readme from '../README.md';
import changelog from '../CHANGELOG.md';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import DemoAccordionStateChange from './DemoAccordionStateChange';

export default {
  title: 'Examples/Accordion/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const DemoAccordionOnStateChange = () =>
  createReactContainer(<DemoAccordionStateChange />);
