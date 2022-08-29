import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAText from './AXATextReact';

export default {
  title: 'Examples/Text/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes,
};

export const Text = ({ variant, wrapSlotInSpan, slot }) =>
  createReactContainer(
    <AXAText variant={variant}>
      {wrapSlotInSpan ? <span>{slot}</span> : slot}
    </AXAText>
  );
