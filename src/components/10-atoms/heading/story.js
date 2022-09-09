import { html } from 'lit';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default {
  title: 'Components/Heading',
  parameters: {
    readme,
    usage: {
      innerHTML: 'H1 Heading',
      propsPureHTML: 'rank="1"',
      propsReact: 'rank="1"',
    },
    changelog,
  },
  args: {
    secondary: false,
    rank: '1',
  },
  argTypes: {
    secondary: { control: 'boolean' },
    rank: {
      control: 'radio',
      options: ['1', '2', '3', '4', '5', '6'],
    },
  },
};

export const Heading = ({ rank, secondary }) => html`
  <axa-heading rank="${rank}" ?secondary="${secondary}"
    >H${rank} Primary Heading</axa-heading
  >
  <p>${loremIpsum}</p>
`;
