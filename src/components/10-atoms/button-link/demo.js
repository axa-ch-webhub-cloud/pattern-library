/* global document */
import { storiesOf } from '@storybook/html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

storiesOf('Examples/Button Link/Pure HTML', module)
  .addParameters({
    readme,
    usage: { disabled: true },
    changelog,
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
