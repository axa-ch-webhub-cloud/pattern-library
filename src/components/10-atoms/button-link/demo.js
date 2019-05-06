/* global document */
import { storiesOf } from '@storybook/html';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';
import './index';

storiesOf('Atoms/Button Link/Demos', module)
  .addDecorator(withMarkdown(Readme))
  .add('Feature - Button clickable', () => {
    const btn = document.createElement('axa-button-link');
    let counter = 0;
    btn.innerHTML = `You clicked me: ${counter} mal, btw my event name is click`;
    btn.addEventListener('click', e => {
      e.preventDefault();
      counter += 1;
      btn.innerHTML = `You clicked me: ${counter} times, btw my event name is click`;
    });

    return btn;
  });
