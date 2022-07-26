import { html } from 'lit';
import readme from './README.md';
import changelog from './CHANGELOG.md';
import './index';

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
    progressText: '',
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
    progressText: {
      control: 'text',
    },
  },
};
export const ProgressBar = ({
  small,
  noBorderRadius,
  value,
  max,
  progressText,
}) => html`
  <axa-progress-bar
    ?small=${small}
    ?noborderradius=${noBorderRadius}
    value=${value}
    max=${max}
    text=${progressText}
  ></axa-progress-bar>
`;
