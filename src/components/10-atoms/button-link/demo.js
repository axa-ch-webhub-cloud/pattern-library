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
  .add('Feature - Button Link icon visible', () => `
<h1>
  HALLO, ich existiere nur im feature branch und nicht auf prod
</h1>
<axa-button-link icon="arrow-right">Icon</axa-button-link>`)
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

