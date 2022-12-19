import { html } from 'lit';
import readme from './README.md';
import changelog from './CHANGELOG.md';
import './index.wc.js';

const colors = {
  default: '',
  'dark-grey': 'inverted-dark-grey',
  white: 'inverted-white',
};

export default {
  title: 'Components/Spinner',
  parameters: {
    readme,
    changelog,
  },
  args: {
    small: false,
    color: 'default',
  },
  argTypes: {
    small: {
      control: 'boolean',
    },
    color: {
      control: 'radio',
      options: Object.keys(colors),
      mapping: colors,
      labels: colors,
    },
  },
};

export const Spinner = ({ small, color }) => html`
  <axa-spinner small="${small}" color="${color}"></axa-spinner>
`;
