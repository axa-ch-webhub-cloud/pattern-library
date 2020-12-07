/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAText from './AXATextReact';
import DemoTextReact from './DemoTextReact';
import DemoTextReactVersioned from './DemoTextReactVersioned';

export default {
  title: 'Examples/Text/React',
  parameters: {
    readme,
    changelog,
    controls: { disabled: false },
    options: { showPanel: true },
  },
};

const variantOptions = {
  default: '',
  'size-1': 'size-1',
  'size-2': 'size-2',
  'size-3': 'size-3',
  bold: 'bold',
};

export const Story = ({ variant, addSpanTag, content }) => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AXAText variant={variant}>
      {addSpanTag ? <span>{content}</span> : content}
    </AXAText>,
    div
  );
  return div;
};

Story.args = {
  variant: '',
  content: `Is your car your pride and joy, or just a means of getting from A to
  B ? Whichever applies to you, it will certainly have the best
  insurance with us. Calculate your premium online – You keep your
  advisor even when you purchase from us online.`,
  addSpanTag: false,
};

Story.argTypes = {
  variant: { control: { type: 'select', options: variantOptions } },
  addSpanTag: { name: 'add a span tag around the content' },
  content: { name: 'set content' },
};

export const DynamicChildrenUnderReact = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoTextReact />, div);
  return div;
};

export const CustomVersionedAxatextUnderReact = () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoTextReactVersioned />, div);
  return div;
};
