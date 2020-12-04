import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

export default {
  title: 'Components/Heading',
  parameters: {
    readme,
    changelog,
  },
};

export const Heading = ({ rank, secondary }) => {
  // const rank = select('Rank', ['1', '2', '3', '4', '5', '6'], '1');
  // const secondary = boolean('Secondary (variant)', false);
  const wrapper = document.createElement('div');

  const template = secondary
    ? html`
        <axa-heading rank="${rank}" variant="secondary"
          >H1 Primary Heading</axa-heading
        >
        <axa-text>${loremIpsum}</axa-text>
      `
    : html`
        <axa-heading rank="${rank}">H1 Primary Heading</axa-heading>
        <axa-text>${loremIpsum}</axa-text>
      `;

  render(template, wrapper);
  return wrapper;
};
Heading.args = {
  rank: 1,
  secondary: false,
};

Heading.argTypes = {
  rank: { control: { type: 'range', min: 1, max: 6, step: 1 } },
};
