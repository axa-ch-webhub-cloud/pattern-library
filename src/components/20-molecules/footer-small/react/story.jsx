import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import { args, argTypes } from '../story.args.js';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoFooterSmall from './DemoFooterSmall';

export default {
  title: 'Examples/Footer Small/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const FooterSmall = _args =>
  createReactContainer(<DemoFooterSmall {..._args} />);
