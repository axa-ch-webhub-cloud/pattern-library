import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXATopContentBar from './AXATopContentBarReact';

export default {
  title: 'Examples/Top Content Bar/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const TopContentBar = _args =>
  createReactContainer(
    <AXATopContentBar
      {..._args}
      onClick={() => {
        // eslint-disable-next-line no-alert, no-undef
        alert('on AXATopContentBar click');
      }}
    >
      {_args.slot} {_args.link ? <axa-link>{_args.link}</axa-link> : ''}
    </AXATopContentBar>
  );
