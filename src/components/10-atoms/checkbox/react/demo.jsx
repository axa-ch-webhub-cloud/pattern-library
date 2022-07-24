import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import { createReactContainer } from '../../../../utils/create-react-container';
import DemoCheckboxCallbackProps from './DemoCheckboxCallbackProps';
import DemoCheckboxLabelAsChildren from './DemoCheckboxLabelAsChildren';
import DemoUpdateLabelChildren from './DemoUpdateLabelChildren';

export default {
  title: 'Examples/Checkbox/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const DefaultWithLabel = () =>
  createReactContainer(<DemoCheckboxCallbackProps />);

export const LabelAsChildOfTheComponent = () =>
  createReactContainer(<DemoCheckboxLabelAsChildren />);

export const UpdatesAlsoAsChild = () =>
  createReactContainer(<DemoUpdateLabelChildren />);
