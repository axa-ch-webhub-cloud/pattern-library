import { storiesOf } from '@storybook/html';
import { html, render } from 'lit-html';
import Readme from '../../README.md';

const story = storiesOf('Welcome', module);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

story.add('to Patterns Library', () => {
  const wrapper = document.createElement('div');

  const template = html`
    <h1>Welcome to Patterns Library</h1>
    <p>
      You can find all our Webcomponents here. Check out our Readme above.
    </p>
  `;

  render(template, wrapper);
  return wrapper;
});
