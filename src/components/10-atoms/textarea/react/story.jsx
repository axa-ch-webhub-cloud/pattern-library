import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXATextarea from './AXATextarea';

export default {
  title: 'Examples/Textarea/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes: {
    ...argTypes,
    defaultValue: {
      control: 'text',
    },
  },
};

export const Textarea = _args =>
  createReactContainer(<AXATextarea {..._args} />);
