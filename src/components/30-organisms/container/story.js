import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Container',
  parameters: {
    readme,
    usage: {
      innerHTML: '...children',
    },
    changelog,
  },
  args: {
    slot: 'Some children',
  },
  argTypes: {
    slot: {
      control: 'text',
    },
  },
};

export const Container = ({ slot }) =>
  html` <axa-container>${slot}</axa-container> `;
