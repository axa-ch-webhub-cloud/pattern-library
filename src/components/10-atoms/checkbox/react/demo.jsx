import React from 'react';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import DemoCheckboxCallbackProps from './DemoCheckboxCallbackProps.jsx';
import DemoCheckboxLabelAsChildren from './DemoCheckboxLabelAsChildren.jsx';
import DemoUpdateLabelChildren from './DemoUpdateLabelChildren.jsx';

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
