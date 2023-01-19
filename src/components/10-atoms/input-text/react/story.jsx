import React, { useState } from 'react';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import { args, argTypes } from '../story.args.js';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXAInputText from './AXAInputText';

export default {
  title: 'Examples/Input Text/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes: { ...argTypes, defaultValue: { control: 'text' } },
};

const InputTextControlled = props => {
  const [value, setValue] = useState(props.value);

  return (
    <AXAInputText
      {...props}
      value={value}
      onChange={evt => setValue(evt.target.value)}
    />
  );
};

export const InputText = _args =>
  createReactContainer(<InputTextControlled {..._args} />);
