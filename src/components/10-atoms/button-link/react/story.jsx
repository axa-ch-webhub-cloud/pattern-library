import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import { invertedBgs } from '../../../../utils/button-story-helpers';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import AXAButtonLink from './AXAButtonLink';

export default {
  title: 'Examples/Button Link/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes,
};

export const ButtonLink = _args =>
  createReactContainer(
    <div
      style={{ backgroundColor: invertedBgs[_args.variant], padding: '10px' }}
    >
      <AXAButtonLink {..._args} className="myCssClass">
        {_args.slot}
      </AXAButtonLink>
    </div>
  );
