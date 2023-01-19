import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import { args, argTypes } from '../story.args.js';
import AXATextReact from '../../text/react/AXATextReact.jsx';
import AXACheckboxReact from './AXACheckboxReact.jsx';

export default {
  title: 'Examples/Checkbox/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes,
};

export const CheckboxUncontrolled = _args => {
  const container = document.createElement('div');
  if (_args.variant && _args.variant.includes('inverted')) {
    container.style.backgroundColor = '#027180';
    container.style.padding = '10px';
  }

  return createReactContainer(
    <div>
      <AXACheckboxReact
        {..._args}
        onChange={e =>
          (document.getElementById(
            'checkbox-output'
          ).innerHTML = `checkbox ${_args.name} state changed to: ${e.target.checked}`)
        }
      />
      <AXATextReact id="checkbox-output">
        checkbox {_args.name} state changed to:
      </AXATextReact>
    </div>,
    container
  );
};
