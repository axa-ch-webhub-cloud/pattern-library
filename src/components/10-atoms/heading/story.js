/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const storyAXAHeading = storiesOf('Components|Heading', module);
storyAXAHeading.addDecorator(withKnobs);
storyAXAHeading.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog,
});

storyAXAHeading.add('Story', () => {
  const rank = select('Rank', ['1', '2', '3', '4', '5', '6'], '1');
  const secondary = boolean('Secondary (variant)', false);
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
});
