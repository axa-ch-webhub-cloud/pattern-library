import React from 'react';
import { invertedBgs } from '../../../../utils/button-story-helpers';
import { args, argTypes } from '../story.args';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXATextReact from '../../text/react/AXATextReact';
import AXAInputFileReact from './AXAInputFileReact';
import { createReactContainer } from '../../../../utils/create-react-container';

export default {
  title: 'Examples/Input File/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
  },
  args,
  argTypes,
};

export const InputFile = _args =>
  createReactContainer(
    <div
      style={{ backgroundColor: invertedBgs[_args.variant], padding: '10px' }}
    >
      <AXAInputFileReact
        {..._args}
        onChange={e => {
          const allFileNames = [];
          [...e.target.files].forEach(i => allFileNames.push(i.name));

          document.getElementById(
            'checkbox-output'
          ).innerHTML = `Files selected: ${allFileNames.toString()}`;
        }}
        className="myCssClass"
      />
      <br />
      <AXATextReact id="checkbox-output">Files selected:</AXATextReact>
    </div>
  );
