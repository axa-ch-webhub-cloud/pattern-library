/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Changelog from './CHANGELOG.md';

storiesOf('Examples/Button Link/Pure HTML', module)
  .addParameters({
    changelog: Changelog,
  })
  .add(
    'Icon visible',
    () => '<axa-button-link icon="arrow-right">Next step</axa-button-link>'
  )
  .add('Clickable', () => {
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
