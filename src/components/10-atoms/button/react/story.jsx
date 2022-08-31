import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes, invertedBgs } from '../story.args';
import AXAButton from './AXAButton';

export default {
  title: 'Examples/Button/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes,
};

export const Button = _args =>
  createReactContainer(
    <div
      style={{ backgroundColor: invertedBgs[_args.variant], padding: '10px' }}
    >
      <AXAButton {..._args} className="myCssClass">
        {_args.slot}
      </AXAButton>
    </div>
  );
