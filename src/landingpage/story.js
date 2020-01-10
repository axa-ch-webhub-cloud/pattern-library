import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Readme from '../../README.md';
import '../components/10-atoms/text';

const story = storiesOf('Welcome', module);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

story.add('to Pattern Library', () => {
  const wrapper = document.createElement('div');

  const template = html`
    <axa-text>Welcome to the Pattern Library!</axa-text>
    <axa-text variant="size-3">
      You can find all our Webcomponents here. Check out our Readme below.
    </axa-text>
  `;

  render(template, wrapper);
  return wrapper;
});
