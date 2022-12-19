import React from 'react';
import { createReactContainer } from '../../../../utils/create-react-container.jsx';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import DemoLink from './DemoLink';
import DemoLinkInsideText from './DemoLinkInsideText';

export default {
  title: 'Examples/Link/React',
  parameters: {
    readme,
    usage: { disable: true },
    changelog,
    controls: { disable: true },
  },
};

export const LinkVariableIcons = () => createReactContainer(<DemoLink />);
export const LinkInsideOfText = () =>
  createReactContainer(<DemoLinkInsideText />);
