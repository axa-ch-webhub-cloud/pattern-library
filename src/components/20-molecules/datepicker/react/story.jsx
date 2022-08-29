import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXADatepickerReact from './AXADatepickerReact';

export default {
  title: 'Examples/Datepicker/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes: { ...argTypes, defaultValue: { control: 'text' } },
};

export const Datepicker = _args =>
  createReactContainer(
    <AXADatepickerReact
      {..._args}
      style={{ width: _args.width }}
      id="datepicker-react"
      data-test-id="datepicker-react"
      data-selenium-id="0815"
      data-display-name={AXADatepickerReact.displayName}
      className="my-special-class"
      onDateChange={newDate => {
        document.querySelector(
          'axa-datepicker[data-test-id="datepicker-react"]'
        ).title = newDate;
      }}
    />
  );
