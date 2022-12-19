import { html } from 'lit';
import readme from './README.md';
import changelog from './CHANGELOG.md';
import './index.wc.js';

export default {
  title: 'Components/Progress Bar',
  parameters: {
    readme,
    usage: {
      componentName: 'progress-bar',
    },
    changelog,
  },
  args: {
    small: false,
    noBorderRadius: false,
    value: '32',
    max: '',
    text: '',
  },
  argsTypes: {
    small: {
      control: 'boolean',
    },
    noBorderRadius: {
      control: 'boolean',
    },
    value: {
      control: 'text',
    },
    max: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
  },
};

export const ProgressBar = ({
  small,
  noBorderRadius,
  value,
  max,
  text,
}) => html`
  <axa-progress-bar
    ?small=${small}
    ?noborderradius=${noBorderRadius}
    value=${value}
    max=${max}
    text=${text}
  ></axa-progress-bar>
`;
