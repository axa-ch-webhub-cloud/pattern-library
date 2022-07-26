import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXALinkReact from './AXALinkReact';

export default {
  title: 'Examples/Link/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes,
};

export const Link = _args =>
  createReactContainer(
    <AXALinkReact
      {..._args}
      onClick={() => {
        // eslint-disable-next-line no-alert, no-undef
        alert('on link click');
      }}
    >
      {_args.slot}
    </AXALinkReact>
  );
