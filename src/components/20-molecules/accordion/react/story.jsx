import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import readme from '../README.md';
import changelog from '../CHANGELOG.md';
import AXAAccordion from './AXAAcordion';

export default {
  title: 'Examples/Accordion/React',
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
    <AXAAccordion
      {..._args}
      onStateChange={isOpen =>
        // eslint-disable-next-line no-alert
        window.alert(isOpen.toString())
      }
    >
      Welcome to the website. If you&apos;re here, you&apos;re likely looking to
      find random words. Random Word Generator is the perfect tool to help you
      do this. While this tool isn&apos;t a word creator, it is a word generator
      that will generate random words for a variety of activities or uses.
    </AXAAccordion>
  );
