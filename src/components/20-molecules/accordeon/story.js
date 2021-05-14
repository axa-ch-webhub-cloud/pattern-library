import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import readme from './README.md';
import changelog from './CHANGELOG.md';

export default {
  title: 'Components/Accordeon',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      componentName: 'accordeon',
    },
    changelog,
  },
};

export const Accordeon = () => {
  const options = {
    small: 'small',
    large: 'large',
  };

  const disabled = boolean('disabled', false);
  const title = text('title', 'This is the title of the accordeon');
  const size = select('size', options);
  const icon = text(
    'icon',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#1cc54e" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'
  );

  const wrapper = document.createElement('div');

  const template = html`
    <axa-accordeon
      size="${size}"
      .icon="${icon}"
      title="${title}"
      ?disabled="${disabled}"
    >
      <axa-text variant="size-3"
        >Welcome to the website. If you're here, you're likely looking to find
        random words. Random Word Generator is the perfect tool to help you do
        this. While this tool isn't a word creator, it is a word generator that
        will generate random words for a variety of activities or uses.
      </axa-text>
    </axa-accordeon>
  `;

  render(template, wrapper);
  return wrapper;
};

Accordeon.parameters = {
  knobs: {
    escapeHTML: false,
  },
};
