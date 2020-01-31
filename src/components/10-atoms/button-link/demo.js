/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Components|Atoms/Button Link/Demos', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add(
    'Feature - Button Link icon visible',
    () => '<axa-button-link icon="arrow-right">Next step</axa-button-link>'
  )
  .add('Feature - Button Link clickable', () => {
    const btn = document.createElement('axa-button-link');
    let counter = 0;
    btn.innerHTML = `You clicked me: ${counter}`;
    btn.addEventListener('click', e => {
      e.preventDefault();
      counter += 1;
      btn.innerHTML = `You clicked me: ${counter}`;
    });

    return btn;
  });
