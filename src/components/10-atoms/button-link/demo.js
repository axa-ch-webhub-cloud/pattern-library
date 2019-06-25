/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Button Link/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
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
